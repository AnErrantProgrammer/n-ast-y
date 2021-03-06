var PartWeights = {};

PartWeights.Identifier = [
    ['NewIdentifier', 'ExistingIdentifier'],
    [1, 3]
];

PartWeights.Conditional = [
    ['IfStatement', 'IfElseStatement'],
    [3, 2]
];

PartWeights.Literal = [
    ['LiteralNumber', 'LiteralString', 'LiteralBoolean'],
    [4, 1, 3]
];

PartWeights.Program = [
    ['Program'],
    [1]
];

PartWeights.ArrayExpression = [
    ['ArrayExpression'],
    [1]
];

PartWeights.VariableDeclaration = [
    ['VariableDeclaration'],
    [1]
];

PartWeights.VariableDeclarator = [
    ['VariableDeclarator'],
    [1]
];

PartWeights.NewIdentifier = [
    ['NewIdentifier'],
    [1]
];

PartWeights.ExistingIdentifier = [
    ['ExistingIdentifier'],
    [1]
];

PartWeights.MathIdentifier = [
    ['MathIdentifier'],
    [1]
];

PartWeights.AbsIdentifier = [
    ['AbsIdentifier'],
    [1]
];

PartWeights.ConsoleIdentifier = [
    ['ConsoleIdentifier'],
    [1]
];

PartWeights.LogIdentifier = [
    ['LogIdentifier'],
    [1]
];

PartWeights.MemberExpression = [
    ['MemberExpression'],
    [1]
];

PartWeights.ExpressionStatement = [
    ['ExpressionStatement'],
    [1]
];

PartWeights.AssignmentExpression = [
    ['AssignmentExpression'],
    [1]
];

PartWeights.CallExpression = [
    ['CallExpression'],
    [1]
];

PartWeights.BinaryExpression = [
    ['BinaryExpression', 'BinaryComparisonExpression'],
    [1, 1]
];

PartWeights.LiteralString = [
    ['LiteralString'],
    [1]
];

PartWeights.LiteralNumber = [
    ['LiteralNumber'],
    [1]
];

PartWeights.IfStatement = [
    ['IfStatement'],
    [1]
];

PartWeights.IfElseStatement = [
    ['IfElseStatement'],
    [1]
];

PartWeights.BlockStatement = [
    ['BlockStatement'],
    [1]
];

PartWeights.ForStatement = [
    ['ForStatement'],
    [1]
];

PartWeights.UpdateExpression = [
    ['UpdateExpression'],
    [1]
];

PartWeights.ReturnStatement = [
    ['ReturnStatement'],
    [1]
];

export default PartWeights;