import Chance from 'chance';

const chance = new Chance();
const Syntax = {};

Syntax.Program = [{
    key: 'type',
    value: 'Program',
    type: 'Static'
}, {
    key: 'body',
    value: null,
    type: 'Body',
    min: 1
}, {
    key: "sourceType",
    value: "script",
    type: "Static"
}];


Syntax.VariableDeclaration = [{
    key: 'type',
    value: 'VariableDeclaration',
    type: 'Static'
}, {
    key: 'declarations',
    value: null,
    type: 'Body',
    min: 1
}, {
    key: 'kind',
    value: 'var',
    type: 'Static'
}];

Syntax.VariableDeclarator = [{
    key: 'type',
    value: 'VariableDeclarator',
    type: 'Static'
}, {
    key: 'id',
    value: null,
    type: 'Dynamic',
    min: 1
}, {
    key: 'init',
    value: null,
    type: 'Dynamic'
}];

Syntax.NewIdentifier = [{
    key: 'type',
    value: 'Identifier',
    type: 'Static'
}, {
    key: 'name',
    value: function() {
        var newIdentifier = chance.word();
        this.scope.push(newIdentifier);
        return newIdentifier;

    },
    type: 'Function'
}];

Syntax.ExistingIdentifier = [{
    key: 'type',
    value: 'Identifier',
    type: 'Static'
}, {
    key: 'name',
    value: function() {
        if (this.scope.length > 0) {
            var id = chance.pickone(this.scope);
            return id;

        } else {
            var newIdentifier = chance.word();
            this.scope.push(newIdentifier);
            return newIdentifier;
        }
    },
    type: 'Function'
}];


Syntax.ArrayExpression = [{
    key: 'type',
    value: 'ArrayExpression',
    type: 'Static'
}, {
    key: 'elements',
    value: null,
    type: 'List'
}];

Syntax.MathIdentifier = [{
    key: 'type',
    value: 'Identifier',
    type: 'Static'
}, {
    key: 'name',
    value: 'Math',
    type: 'Static'
}, {
    key: 'properties',
    value: null,
    type: 'Static'
}];

Syntax.AbsIdentifier = [{
    key: 'type',
    value: 'Identifier',
    type: 'Static'
}, {
    key: 'name',
    value: 'abs',
    type: 'Static'
}];

Syntax.ConsoleIdentifier = [{
    key: 'type',
    value: 'Identifier',
    type: 'Static'
}, {
    key: 'name',
    value: 'console',
    type: 'Static'
}, {
    key: 'properties',
    value: null,
    type: 'Static'
}];

Syntax.LogIdentifier = [{
    key: 'type',
    value: 'Identifier',
    type: 'Static'
}, {
    key: 'name',
    value: 'log',
    type: 'Static'
}];

Syntax.MemberExpression = [{
    key: 'type',
    value: 'MemberExpression',
    type: 'Static'
}, {
    key: 'computed',
    value: false,
    type: 'Static'
}, {
    key: 'object',
    value: null,
    type: 'Dynamic'
}, {
    key: 'property',
    value: function() {
        if(typeof this.object.properties !== 'undefined'){
            return chance.weighted(this.object.properties[0], this.object.properties[1]);
        }else{
            return chance.weighted(this.object.property);            
        }
    },
    type: 'KeyFunction'
}];

Syntax.ExpressionStatement = [{
    key: 'type',
    value: 'ExpressionStatement',
    type: 'Static'
}, {
    key: 'expression',
    value: null,
    type: 'Dynamic'
}];

Syntax.AssignmentExpression = [{
    key: 'type',
    value: 'AssignmentExpression',
    type: 'Static'
}, {
    key: 'operator',
    value: '=',
    type: 'Static'
}, {
    key: 'left',
    value: null,
    type: 'Dynamic'
}, {
    key: 'right',
    value: null,
    type: 'Dynamic'
}];

Syntax.CallExpression = [{
    key: 'type',
    value: 'CallExpression',
    type: 'Static'
}, {
    key: 'callee',
    value: null,
    type: 'Dynamic'
}, {
    key: 'arguments',
    value: null,
    type: 'Arguments'
}];

Syntax.BinaryExpression = [{
    key: 'type',
    value: 'BinaryExpression',
    type: 'Static'
}, {
    key: 'operator',
    value: null,
    type: 'DynamicValue'
}, {
    key: 'left',
    value: null,
    type: 'Dynamic'
}, {
    key: 'right',
    value: null,
    type: 'Dynamic'
}];

Syntax.BinaryComparisonExpression = [{
    key: 'type',
    value: 'BinaryExpression',
    type: 'Static'
}, {
    key: 'operator',
    value: null,
    type: 'DynamicValue'
}, {
    key: 'left',
    value: null,
    type: 'Dynamic'
}, {
    key: 'right',
    value: null,
    type: 'Dynamic'
}];

Syntax.LiteralString = [{
    key: 'type',
    value: 'Literal',
    type: 'Static'
}, {
    key: 'value',
    value: function() {
        return chance.word()
    },
    type: 'Function'
}, {
    key: 'raw',
    value: function() {
        return `"${this.value}"`;
    },
    type: 'Function'
}];

Syntax.LiteralNumber = [{
    key: 'type',
    value: 'Literal',
    type: 'Static'
}, {
    key: 'value',
    value: function() {
        return chance.integer({
            min: 0,
            max: 10
        });
    },
    type: 'Function'
}, {
    key: 'raw',
    value: function() {
        return `"${this.value}"`;
    },
    type: 'Function'
}];

Syntax.LiteralBoolean = [{
    key: 'type',
    value: 'Literal',
    type: 'Static'
}, {
    key: 'value',
    value: function() {
        return chance.pickone([true, false]);
    },
    type: 'Function'
}, {
    key: 'raw',
    value: function() {
        return `"${this.value}"`;
    },
    type: 'Function'
}];

Syntax.IfStatement = [{
    key: 'type',
    value: 'IfStatement',
    type: 'Static'
}, {
    key: 'test',
    value: null,
    type: 'Dynamic'
}, {
    key: 'consequent',
    value: null,
    type: 'Dynamic'
}, {
    key: 'alternate',
    value: null,
    type: 'Static'
}];

Syntax.IfElseStatement = [{
    key: 'type',
    value: 'IfStatement',
    type: 'Static'
}, {
    key: 'test',
    value: null,
    type: 'Dynamic'
}, {
    key: 'consequent',
    value: null,
    type: 'Dynamic'
}, {
    key: 'alternate',
    value: null,
    type: 'Dynamic'
}];

Syntax.BlockStatement = [{
    key: 'type',
    value: 'BlockStatement',
    type: 'Static'
}, {
    key: 'body',
    value: null,
    type: 'Body',
    min: 0
}];

Syntax.ForStatement = [{
    key: 'type',
    value: 'ForStatement',
    type: 'Static'
}, {
    key: 'init',
    value: null,
    type: 'Dynamic'
}, {
    key: 'test',
    value: null,
    type: 'Dynamic'
}, {
    key: 'update',
    value: null,
    type: 'Dynamic'
}, {
    key: 'body',
    value: null,
    type: 'Dynamic'
}];

Syntax.UpdateExpression = [{
    key: 'type',
    value: 'UpdateExpression',
    type: 'Static'
}, {
    key: 'argument',
    value: null,
    type: 'Dynamic'
}, {
    key: 'operator',
    value: null,
    type: 'DynamicValue'
}, {
    key: 'prefix',
    value: null,
    type: 'DynamicValue'
}];

Syntax.ReturnStatement = [{
    key: 'type',
    value: 'ReturnStatement',
    type: 'Static'
}, {
    key: 'argument',
    value: null,
    type: 'Dynamic'
}];

export default Syntax