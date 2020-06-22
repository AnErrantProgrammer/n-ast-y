var validations = [];
var template = '';

console.log = function(){};
let reviver = (key, value) => {
    if (typeof value === 'string' && value.indexOf('function ') === 0) {
        let functionTemplate = `(${value})`;
        return eval(functionTemplate);
    }
    return value;
};


self.addEventListener('message', function(msg) {
    switch (msg.data.topic) {

        case 'setValidations':
            validations = JSON.parse(msg.data.payload, reviver)

            template = [
                `var functionTemplate = function(${Object.keys(validations[0].inputs).join(',')}){`,
                '@@PROGRAM',
                'return answer;',
                '}'
            ].join('\n');

            break;

        case 'executeProgram':
            var totalFitness = 0;

            var program = msg.data.payload;

            try{
	            eval(template.replace('@@PROGRAM', msg.data.payload));
	            validations.forEach(function(validation) {


	                try {
	                	var keys = Object.keys(validation.inputs);
	                    var ins = keys.map(function(val){
	                    	return validation.inputs[val];
	                    })

		                let result = validation.validation(functionTemplate(...ins));

		                if (result) {
		                    totalFitness++;
		                }
	                } catch (ex) {
	                    totalFitness--;
	                }


	            });

            } catch(ex){

            }

            self.postMessage({
                code: program,
                ast: msg.data.ast,
                fitness: totalFitness
            });

            break;

    }


});
// var _this = Object.keys(this);
// let _that = Object.keys(this);
// _that.forEach(function(key){
// 	if(!_this.indexOf(key) &&key != '_this'){
// 		delete this[key];
// 	}
// });