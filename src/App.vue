<template>
  <div id="app">

      <b-modal id="teacher" title="Program Teacher">
            <b-form-textarea
              v-model="teacherProgram"
              rows="6"
              max-rows="12"
            ></b-form-textarea>
            <b-button variant="success" @click="teachProgram">Teach</b-button>
      </b-modal>


      <b-modal id="select-validation" title="Sample Validations">
        <p>{{selectedPart}}</p>
        <ul class="list-unstyled">
            <span>Selected Validation: <strong>{{selectedValidation.name}}</strong></span>
            <hr/>
            <li v-for="(validation, index) in sampleValidations" v-bind:key="index">
              <a class="text-primary" @click="validations=validation.validations;selectedValidation=validation">{{ validation.name }} - {{ validation.description }}</a>
            </li>
          </ul>
      </b-modal>

      <b-modal id="validate-program" title="Program Validator">
        <ul class="list-unstyled">
          <li v-for="(validationInput, index) in validationInputKeys" v-bind:key="index">
            <div v-if="validationInput!='answer'">
              <label>{{validationInput}}</label>
              <b-form-input v-model="validationInputs[validationInput]"></b-form-input>
            </div>
          </li>
        </ul>
        <pre style="height:200px;overflow-y: scroll;">{{mostFitProgram}}</pre>
        <pre style="height:100px;overflow-y: scroll;">{{validationInputs['answer']}}</pre>
        <b-button  @click="validateProgram">Validate</b-button>
      </b-modal>

      <b-modal id="syntax-details" title="Syntax Details">
        <p class="my-4">{{selectedPart}}</p>
        <ul class="list-unstyled">
            <li v-for="(property, index) in syntax[selectedPart]" v-bind:key="index">
              <strong>{{ property.key }}</strong>
              {{ property.value }}
            </li>
          </ul>
      </b-modal>
      <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand>n-ast-y</b-navbar-brand>
          <b-navbar-nav>
            <b-button size="sm" class="mr-1" variant="success" v-bind:disabled="isRunning"  @click="start">Run</b-button>&nbsp;&nbsp;
            <b-button size="sm" class="mr-1" variant="warning" v-bind:disabled="!isRunning"  @click="stop">Pause</b-button>&nbsp;&nbsp;
            <b-button size="sm" class="mr-1" variant="danger" v-bind:disabled="programState=='stopped'"  @click="restart">Reset</b-button>&nbsp;&nbsp;
            
            <b-dropdown id="dropdown-1" left text="View" size="sm" variant="primary">
              <b-dropdown-item v-b-modal.select-validation>Validation Selector</b-dropdown-item>
              <b-dropdown-item v-b-modal.validate-program>Solution Validator</b-dropdown-item>
              <b-dropdown-item v-b-modal.teacher>Teacher</b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
             <b-navbar-brand href="http://anerrantprogrammer.com/">
              <img class="nav-image" src="avatar.png" alt="anerrantprogrammer">
            </b-navbar-brand>
            <b-navbar-brand href="https://twitter.com/errantProgrammr">
              <img class="nav-image" src="twitter.png" alt="@errantProgrammr">
            </b-navbar-brand>
          </b-navbar-nav>
      </b-navbar>
    <b-container fluid>
      <b-row style="margin-top:25px;height: calc(100vh - 120px);">
        <b-col cols="9">
          <b-row>
            <b-col cols="6">
              <b-card no-body bg-variant="light">
                <template v-slot:header>
                  <div class="mb-0">
                    Output
                    <span style="float:right" class="ml-auto">
                      <div class="text-center">
                        <b-button variant="light" size="sm">
                          Current Generation <b-badge variant="primary">{{totalGenerations}}</b-badge>
                        </b-button>
                      </div>
                    </span>
                  </div>
                </template>
           
                <b-card-body>
                  <b-card-text>
                    <pre style="height:300px;overflow-y: scroll;">{{firstProgram()}}</pre>


                  </b-card-text>
                </b-card-body>

                <!-- <b-card-footer>
                  <b-button size="sm" class="mr-1" variant="info" v-bind:disabled="programs.length>0"  @click="showRandomProgram">Show Random Program</b-button>
                </b-card-footer> -->
              </b-card>
            </b-col>

            <b-col cols="6">
              <b-card bg-variant="light">
                <template v-slot:header>
                  <div class="mb-0">
                    Fittest Program
                    <span style="float:right" class="ml-auto">
                      <div class="text-center">
                        <b-button variant="light" size="sm">
                          Highest Fitness <b-badge variant="primary">{{fitness}}/{{validations.length}}</b-badge>
                        </b-button>
                      </div>
                    </span>
                  </div>
                </template>
           
                <b-card-text >
                  <pre style="height:300px;overflow-y: scroll;">{{ mostFitProgram }}</pre>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <b-row style="margin-top:25px">
            <b-col cols="12">
              <b-card bg-variant="light" header="Log">
                <b-card-text >
              <div id="log" style="height:300px;overflow-y: scroll;"></div>
            </b-card-text>
          </b-card>
            </b-col>
          </b-row>

        </b-col>

        <b-col cols="3">
          <h4>Settings</h4>
          <b-tabs>
            <b-tab title="Settings">
              <ul class="list-unstyled sidebar-list">
                <li><h6>Validation Settings</h6></li>
                <li>
                  <p>Selected Validation: <strong>{{selectedValidation.name}}</strong></p>
                  <p>{{selectedValidation.description}}</p>
                </li>
                <li><h6>Sandbox Settings</h6></li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Max Sandboxes</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="maxSandboxCount" /> 
                    </b-col>
                  </b-row>
                </li>

                <li><h6>Generation Settings</h6></li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Programs Per Generation</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="maxAttempts" /> 
                    </b-col>
                  </b-row>
                </li>

                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Stale Generation Max</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="staleGenerationCount" /> 
                    </b-col>
                  </b-row>
                </li>

                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Learned Program Max</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="maxLearnedPrograms" /> 
                    </b-col>
                  </b-row>
                </li>

                <li><h6>Learning Settings</h6></li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Enable Learning</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-checkbox size="sm" v-model="learningEnabled" value="true" unchecked-value="false" /> 
                    </b-col>
                  </b-row>
                </li>

                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Rate to learn less fit programs</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="additionalLearnRate" /> 
                    </b-col>
                  </b-row>
                </li>
                                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Initial weight for learned parts</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="initialLearn" /> 
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Learn rate for fit parts</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="learnRate" /> 
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>De-learn weight for unfit parts</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="deLearnRate" /> 
                    </b-col>
                  </b-row>
                </li>

                <li><h6>Mutation Settings</h6></li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Mutate Weight</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="mutateWeight" /> 
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Replace Weight</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="replaceWeight" /> 
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Leave Weight</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="leaveWeight" /> 
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col cols="8">
                      <label>Remove Weight</label> 
                    </b-col>
                    <b-col cols="3">
                      <b-form-input type="number" step="1" size="sm" v-model="removeWeight" /> 
                    </b-col>
                  </b-row>
                </li>



              </ul>
            </b-tab>

            <b-tab title="Syntax">
              <b-button class="mt-3" size="sm" variant="danger" @click="clearLearnedParts">Clear All Learned Syntax</b-button>&nbsp;
              <ul class="list-unstyled sidebar-list">
                <li v-for="(partWeight, key) in partWeights" v-bind:key="key">
                  <strong>{{key}}</strong>
                  <ul class="list-unstyled">
                    <li v-for="(part, index) in partWeight[0]" v-bind:key="index">
                      <b-row>
                        <b-col cols="8">
                          <label @click="openPartDetail(part)">{{part}}</label> 
                        </b-col>
                        <b-col cols="3">
                          <b-form-input type="number" step="0.1" size="sm" v-model="partWeight[1][index]" /> 
                        </b-col>
                      </b-row>
                    </li>
                  </ul>
                </li>
              </ul>
            </b-tab>

            <b-tab title="Properties">
              <ul class="list-unstyled sidebar-list">
                <li v-for="(propertyWeight, key) in propertyWeights" v-bind:key="key">
                  <strong>{{key}}</strong>
                  <ul class="list-unstyled">
                    <li v-for="(propertyWeightKey, key) in propertyWeight" v-bind:key="key">
                      <small><strong>{{key}}</strong></small>
                      <ul class="list-unstyled">
                        <li v-for="(part, index) in propertyWeightKey[0]" v-bind:key="index">
                          <b-row>
                            <b-col cols="8">
                              <label>{{part}}</label> 
                            </b-col>
                            <b-col cols="3">
                              <b-form-input type="number" step="0.1" size="sm" v-model="propertyWeightKey[1][index]" /> 
                            </b-col>
                          </b-row>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </b-tab>

            <b-tab title="Values">
              <ul class="list-unstyled sidebar-list">
                <li v-for="(valueWeight, key) in valueWeights" v-bind:key="key">
                  <strong>{{key}}</strong>
                  <ul class="list-unstyled">
                    <li v-for="(valueWeightKey, key) in valueWeight" v-bind:key="key">
                      <small><strong>{{key}}</strong></small>
                      <ul class="list-unstyled">
                        <li v-for="(part, index) in valueWeightKey[0]" v-bind:key="index">
                          <b-row>
                            <b-col cols="8">
                              <label>{{part}}</label> 
                            </b-col>
                            <b-col cols="3">
                              <b-form-input type="number" step="0.1" size="sm" v-model="valueWeightKey[1][index]" /> 
                            </b-col>
                          </b-row>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Syntax from './language/Syntax.js'
import PartWeights from './language/Parts.js'
import ValueWeights from './language/Values.js'
import PropertyWeights from './language/Properties.js'
import SampleProblems from './validations/sample.js'

import { format } from 'date-fns'

import _ from 'lodash'
import Chance from 'chance'
const chance = new Chance();

export default {
  name: 'App',
  data: function () {
    return {
      programState: 'stopped',
      syntax: Syntax,
      partWeights: PartWeights,
      propertyWeights: PropertyWeights,
      valueWeights: ValueWeights,
      program : '',
      programs: [],
      nextGenPrograms: [],
      mostFitProgram: '// None yet',
      mostFitAST: {
          "type": "Program",
          "body": [],
          "sourceType": "script"
      },
      deLearnRate: 0.1,
      learnRate: 0.1,
      initialLearn: 0.1,
      mutateWeight:20,
      replaceWeight:10,
      leaveWeight:1,
      removeWeight:5,
      additionalLearnRate: 250,
      staleGenerationCount: 10,
      maxLearnedPrograms: 250,
      fitness: 0,
      foundGeneration:0,
      totalGenerations:0,
      maxAttempts: 500,
      sandboxCount: 0,
      sandboxes: [],
      maxSandboxCount: 250,
      mainLoopInterval: null,
      selectedPart: null,
      sampleValidations: SampleProblems,
      selectedValidation: SampleProblems.SUM_2,
      validations: SampleProblems.SUM_2.validations,
      validationInputs: {},
      mutatedProgram: '',
      currentProgram:'console.log("Hello World");',
      teacherProgram: '',
      programOutputIndex: 0,
      lastProgram:'',
      learningEnabled: false
    }
  },
  components: {
  },
  computed: {
    
    validationInputKeys(){
      return Object.keys(_.cloneDeep(this.validations[0].inputs));
    },
    totalFitness(){
      return this.fitness / this.validations.length * 100
    },
    isRunning(){
      return typeof this.mainLoopInterval == 'number';
    },
    queue(){
      return parseInt(100 - (this.programs.length / this.maxAttempts) * 100,10);
    },
    programSource(){
      if(typeof this.program === 'object'){
        //eslint-disable-next-line no-undef
        return escodegen.generate(this.program)

      } else {
        return '// None'
      }
    }
  },
  created: function(){
    var vm = this;
  },
  methods: {
    firstProgram(){
      var vm = this;
      if(vm.programs.length>0){
        vm.lastProgram = vm.programs[0].code;
        return vm.lastProgram;
      } else{
        return vm.lastProgram;
      }
    },
    openPartDetail(part){
      var vm = this;
      vm.selectedPart = part;
      this.$bvModal.show('syntax-details');
    },
    restart(){
      document.getElementById("log").innerHTML = '';
      var vm = this;
      vm.programState = 'stopped';
      vm.nextGenPrograms = [];
      vm.programs = [];
      vm.totalGenerations = 0;
      vm.foundGeneration = 0;
      vm.fitness = 0;
      vm.lastProgram = '';
      vm.mostFitProgram = '// None yet';
      vm.mostFitAST = {
          "type": "Program",
          "body": [],
          "sourceType": "script"
      };
      vm.terminateSandboxes();
    },
    start(){
      var vm = this;
      vm.programState = 'runnning';
      if(vm.sandboxes.length < vm.maxSandboxCount ){
        vm.initializeSandboxes();
      }
      vm.createGeneration();  
      vm.logOutput(`Starting interval process`)
      vm.mainLoopInterval = setTimeout(vm.processQueue, 5);
    },
    createGeneration(){
      var vm = this;
      var i;
      vm.totalGenerations++;

      if(vm.fitness > 0){
        let count = Math.ceil(vm.maxAttempts / 10);
        vm.logOutput('Mutating ' + count + ' of the most fit programs');

        for (i = 0; i < count; i++) {
          vm.mutateProgram(vm.mostFitAST);
        }
      }
      
      vm.logOutput('Mutating ' + vm.nextGenPrograms.length + ' programs');
      _.forEach(vm.nextGenPrograms, function(nextGenProgram){
        vm.mutateProgram(nextGenProgram.ast);
      });

      vm.logOutput('Creating ' + (vm.maxAttempts - vm.programs.length) + ' programs');

      for (i = vm.programs.length; i < vm.maxAttempts; i++) {
          vm.createProgram();
      }

      vm.logOutput(`Finished creating programs`)
    },
    stop(){
      var vm = this;
      vm.programState = 'paused';
      clearInterval(vm.mainLoopInterval);
      vm.logOutput(`Stopping interval process`);
      vm.mainLoopInterval = null;
    },
    getProgramSource(ast){
      //eslint-disable-next-line no-undef
      return escodegen.generate(ast);
    },
    processQueue(){
      var vm = this;

      if(vm.programs.length > 0){
        var sandbox = getSandbox();
        while(vm.programs.length > 0 && sandbox){
          let program = vm.programs.pop();
          vm.runProgram(program.code, program.ast, sandbox);
          sandbox = getSandbox();
        }

        vm.mainLoopInterval = setTimeout(vm.processQueue, 5);
      } else {
        vm.logOutput(`Generation ${vm.totalGenerations} complete`);
        if(vm.fitness < vm.validations.length){
          let boomerGen = vm.totalGenerations - vm.foundGeneration;
          
          if(boomerGen >= vm.staleGenerationCount){
            vm.deWeightLearnedSyntax();
          }

          if(boomerGen >= (vm.staleGenerationCount *2)){
              vm.fitness = 0;
              vm.mostFitProgram = '// None yet';
              vm.mostFitAST = {
                  "type": "Program",
                  "body": [],
                  "sourceType": "script"
              };
          }

          vm.createGeneration();
          vm.logOutput(`Executing generation ${vm.totalGenerations}`);
          vm.mainLoopInterval = setTimeout(vm.processQueue, 5);
        } else {
          vm.logOutput(`Found the most fit program`);
          vm.stop();
        }

      }


      function getSandbox(){
          return vm.sandboxes.find(function(sandbox){
            return sandbox.state == 'idle';
          });
      }
    },
    logOutput(message){
      var node = document.createElement("PRE");
      var log = document.getElementById("log");
      var textnode = document.createTextNode( format(new Date(), 'yyyy-MM-dd HH:mm:ss') + ': ' + message);
      node.appendChild(textnode);
      log.appendChild(node);
      log.scrollTop = log.scrollHeight;
    },
    terminateSandboxes: function(){
      var vm = this;
      vm.logOutput('Clearing old sandboxes')
      vm.sandboxes.forEach(function(sandbox){
        sandbox.terminate();
      });

      vm.sandboxes = [];
      vm.logOutput('Finished clearing old sandboxes')      
    },
    initializeSandboxes: function(){
      var vm = this;
      vm.logOutput('Creating sandboxes')
      let replacer = (key, value) => {  
        if (typeof value === 'function') {    
          return value.toString();  
        }   
        return value;
      } 

      for (var count = vm.sandboxes.length; count < vm.maxSandboxCount; count++) {
        let sandbox = new Worker('js/sandbox.js');
        sandbox.state = 'idle';

        var init = {
            topic: 'setValidations',
            payload: JSON.stringify(vm.validations, replacer)
        };

        sandbox.addEventListener('message', function(messageEvent) {
          this.state = 'idle';
          let event = messageEvent;

          if(event.data.fitness > vm.fitness){
            vm.logOutput(`Found a more fit function`);
            vm.logOutput(`Fitness: ${event.data.fitness}\nProgram:\n${event.data.code}` );

            vm.foundGeneration = vm.totalGenerations;
            vm.fitness = event.data.fitness;
            vm.mostFitProgram = event.data.code;
            vm.mostFitAST = event.data.ast;
            vm.nextGenPrograms.unshift(event.data);

            if(vm.learningEnabled){
              vm.learnProgram(event.data.ast, event.data.fitness);
            }
          } else if(vm.fitness > 1 && event.data.fitness >= (vm.fitness-1) ){
             vm.nextGenPrograms.unshift(event.data);

             if(vm.learningEnabled){
               let shouldLearn = chance.weighted([true, false],[1,vm.additionalLearnRate]);

               if(shouldLearn){
                  vm.learnProgram(event.data.ast, event.data.fitness);
               }
            }
          }

          while(vm.nextGenPrograms.length > vm.maxLearnedPrograms){
            vm.maxLearnedPrograms.pop();
          }
          
        });

        sandbox.addEventListener('error', function(errorEvent) {
          console.log('An error occcurred in worker: ' + errorEvent.message);
          //vm.logOutput(`Fitness: Error\nProgram:\n${e.data.program}` );
        });

        sandbox.postMessage(init);

        vm.sandboxes.push(sandbox);
        
      }
      vm.logOutput('Finished creating sandboxes')

    },
    deWeightLearnedSyntax(){
      var vm = this;
      vm.logOutput('Lowering Weights because program is stale');

      _.forEach(vm.partWeights, function(partWeights){
          var weightsLength = partWeights[0].length
          for (var i = 0; i < weightsLength; i++) {
            if(partWeights[0][i].startsWith('_')){
              partWeights[1][i] -= parseFloat(vm.deLearnRate);
            }

            if(partWeights[1][i] <= 0){
                partWeights[0].splice(i, 1);
                partWeights[1].splice(i, 1);
                weightsLength--;
                i--;
              }
          }
          
      });

    },
    clearLearnedParts(){
      var vm = this;

      _.forEach(vm.partWeights, function(partWeights) {
          var weightsLength = partWeights[0].length
          for (var i = 0; i < weightsLength; i++) {
              if (partWeights[0][i].startsWith('_')) {
                  partWeights[0].splice(i, 1);
                  partWeights[1].splice(i, 1);
                  weightsLength--;
                  i--;
              }
          }

      });
    },
    runProgram(program, ast, sandbox){
      var vm = this;

      var app = {
        topic:"executeProgram",
        ast: ast,
        payload: program
      }

      sandbox.state = 'running';
      sandbox.postMessage(app);
        
    },
    createProgram(){
      var vm = this;
      let program = this.createNode('Program', null);
      while(program.body.length == 0){
        program = this.createNode('Program', null);
      }

      vm.programs.push({
        code: vm.getProgramSource(program),
        ast: program,
        fitness: -1
      });

    },
    validateProgram(){
      var vm = this;

      _.forEach(vm.validationInputs, function(validationInput, key){
        try{
          window[key] = eval(validationInput);
        } catch(ex) {
          window[key] = validationInput;
        }
      });

      //eslint-disable-next-line no-undef
      window.answer = null;

      eval(vm.mostFitProgram);
      vm.validationInputs['answer'] = window.answer;
    },
    mutateProgram(ast){
      var vm = this;

      //eslint-disable-next-line no-undef
      // var ast = esprima.parse(vm.currentProgram);
      // var ast = _.cloneDeep(vm.mostFitAST);

      //eslint-disable-next-line no-undef
      estraverse.traverse(ast, {
          enter: function(node, parent) {
              let scope = [];
              if (parent != null) {
                  scope = parent.scope;
              } else {
                  scope = Object.keys(vm.validations[0].inputs);
              }

              node.scope = scope;
              node.parent = parent;

              if (node.type !== 'Program') {
                  let action = chance.weighted(["mutate", "replace", "leave", "remove"], [vm.mutateWeight, vm.replaceWeight, vm.leaveWeight, vm.removeWeight]);

                  switch(action){
                    case "mutate":
                    return vm.mutateNode(node);

                    case "replace":
                    return vm.createNode(node.type, node.parent);

                    case "remove":
                    this.remove();
                    break;

                    case "leave":
                    break;
                  }
              }
               
          }
      });      

      //eslint-disable-next-line no-undef
      // vm.mutatedProgram = escodegen.generate(ast);
      // 
      
      vm.programs.push({
        code: vm.getProgramSource(ast),
        ast: ast,
        fitness: 0
      });

    },
    teachProgram(){
      var vm = this;

      //eslint-disable-next-line no-undef
      var ast = esprima.parse(vm.teacherProgram);
      //eslint-disable-next-line no-undef
      estraverse.traverse(ast, {
          enter: function(node, parent) {
              if (typeof node._id === 'undefined') {
                  node._id = '_' + chance.guid({
                      version: 4
                  });
              }
          }
      });

      vm.learnProgram(JSON.parse(JSON.stringify(ast)), 1);
    },
    learnProgram(ast, fitness){
      var vm = this;
      vm.logOutput('Learning new program')

      //eslint-disable-next-line no-undef
      estraverse.traverse(ast, {
          enter: function(node, parent) {
              if (node.type !== 'Program') {
                  if (typeof vm.partWeights[node.type] === 'undefined') {
                      vm.partWeights[node.type] = [
                          [],
                          []
                      ];
                  }

                  var partIndex = _.findIndex(vm.partWeights[node.type][0], function(e) {
                      return e == node._id;
                  });

                  if (partIndex != -1) {
                      //console.log("Part Exists: incrementing");
                      vm.partWeights[node.type][1][partIndex] += parseFloat(vm.learnRate);
                  } else {
                      // console.log("Creating new part: " + node.type + ' ' + node._id);
                      vm.partWeights[node.type][0].push(node._id);
                      vm.partWeights[node.type][1].push(parseFloat(vm.initialLearn));
                  }

                  vm.syntax[node._id] = [];

                  for (let prop in node) {
                      if (prop != 'scope') {
                          vm.syntax[node._id].push({
                              key: prop,
                              value: node[prop],
                              type: 'Static'
                          });
                      }
                  }

              }
          }
      });
    },
    mutateNode(node, depth=0){
      var vm = this;
      var key = node.type;
      var mutated = false;
      var syntax = vm.syntax[key]
      _.forEach(syntax, function(syntaxPart) {
        try {
          var action = chance.weighted(['mutate', 'leave'],[4, 3]);

          if(syntaxPart.value == null){
            if(typeof vm.propertyWeights[key] !== 'undefined' && typeof vm.propertyWeights[key][syntaxPart.key] !== 'undefined'){
              syntaxPart.value = vm.propertyWeights[key][syntaxPart.key];
            }

            if(typeof vm.valueWeights[key] !== 'undefined' && typeof vm.valueWeights[key][syntaxPart.key] !== 'undefined'){
              syntaxPart.value = vm.valueWeights[key][syntaxPart.key];
            }
          }

          if(action == 'mutate'){
            mutated = true;

            if (syntaxPart.type === 'Static') {
                node[syntaxPart.key] = syntaxPart.value;
            } else if (syntaxPart.type === 'Dynamic') {
                node[syntaxPart.key] = vm.generateDynamic(syntaxPart, node);
            } else if (syntaxPart.type === 'DynamicValue') {
                node[syntaxPart.key] = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
            } else if (syntaxPart.type === 'Function') {
                node[syntaxPart.key] = syntaxPart.value.call(node);
            } else if (syntaxPart.type === 'KeyFunction') {
                node[syntaxPart.key] = vm.createNode(syntaxPart.value.call(node), node);
            } else if (syntaxPart.type === 'Body') {
                var bodyMutationType = chance.weighted(['leave','mutate','shuffle'],[4,3,1]);
                node.scope = _.cloneDeep(node.scope);

                if(bodyMutationType == 'mutate'){
                  depth++;
                  node[syntaxPart.key] = vm.generateBody(syntaxPart, node, depth);
                  depth--;
                } else if( bodyMutationType == 'shuffle'){
                  node[syntaxPart.key] =  _.shuffle(node[syntaxPart.key]);
                }
            }
          }

        } catch(ex){
          console.error(ex);
          throw ex;
        }
      });

      if (mutated) {
          node._id = '_' + chance.guid({
              version: 4
          });
      }

      return node;
    },
    createNode(keyName, parent, depth=0) {
      var vm = this;
      var scope = [];
      try{
        var key = chance.weighted(vm.partWeights[keyName][0], vm.partWeights[keyName][1]);

      } catch(ex) {
        console.error(keyName);
        console.error(ex);
        throw ex;
      }

      if(parent != null){
          scope = parent.scope;
      } else {
          scope = Object.keys(vm.validations[0].inputs);
      }

      let nodeParts = {
          scope: scope,
          parent: parent
      };

      _.forEach(vm.syntax[key], function(syntaxPart) {
        try {
          if(syntaxPart.value == null){
            if(typeof vm.propertyWeights[key] !== 'undefined' && typeof vm.propertyWeights[key][syntaxPart.key] !== 'undefined'){
              syntaxPart.value = vm.propertyWeights[key][syntaxPart.key];
            }

            if(typeof vm.valueWeights[key] !== 'undefined' && typeof vm.valueWeights[key][syntaxPart.key] !== 'undefined'){
              syntaxPart.value = vm.valueWeights[key][syntaxPart.key];
            }
          }

          if (syntaxPart.type === 'Static') {
              nodeParts[syntaxPart.key] = syntaxPart.value;
          } else if (syntaxPart.type === 'Dynamic') {
              nodeParts[syntaxPart.key] = vm.generateDynamic(syntaxPart, nodeParts);
          } else if (syntaxPart.type === 'DynamicValue') {
              nodeParts[syntaxPart.key] = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
          } else if (syntaxPart.type === 'Function') {
              nodeParts[syntaxPart.key] = syntaxPart.value.call(nodeParts);
          } else if (syntaxPart.type === 'KeyFunction') {
              nodeParts[syntaxPart.key] = vm.createNode(syntaxPart.value.call(nodeParts), nodeParts, depth);
          } else if (syntaxPart.type === 'Body') {
              depth++;
              nodeParts.scope = _.cloneDeep(nodeParts.scope);
              nodeParts[syntaxPart.key] = vm.generateBody(syntaxPart, nodeParts, depth);
              depth--;
          }

        } catch(ex){
          console.error(key);
          console.error(ex);
          throw ex;
        }
      });

      if (typeof nodeParts._id === 'undefined') {
          nodeParts._id = '_' + chance.guid({
              version: 4
          });
      }

      delete nodeParts.parent;

      return nodeParts;
    },
    generateDynamic(syntaxPart, nodeParts) {
      var vm = this;
      let subPart = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
      return vm.createNode(subPart, nodeParts);
    },
    generateBody(syntaxPart, nodeParts, depth) {
      var vm = this;
      var body = [];
      let subPart = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);

      while (( syntaxPart.min > 0 && body.length < syntaxPart.min) || (subPart !== 'Terminate' && subPart !== 'ReturnStatement')) {
          if (subPart !== 'Terminate') {
              body.push(vm.createNode(subPart, nodeParts, depth));
          }

          subPart = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
          if(subPart!== 'Terminate' && subPart !== 'ReturnStatement'){
            subPart = chance.weighted([subPart,'Terminate'],[1,depth-1]);
          }
      }
      return body;
    }

  }
}
</script>

<style lang="scss">
*{
  box-sizing:border-box;
}
body{
  height:100%;
  overflow:hidden;
  font-size: small;
}

#app {
  height:100%;
  overflow:hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.sidebar-list{
    margin-top:25px;
    height: calc(100vh - 250px);
    overflow-y: auto;
    overflow-x: hidden;
}

.sidebar-list > li:last-child{
  margin-bottom:40px;
}

#log > pre{
  margin:0px;
}

.nav-image{
  height:32px;
}
</style>
    