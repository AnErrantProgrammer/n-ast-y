const PropertyWeights = {};

PropertyWeights.Program = {};
PropertyWeights.Program.body = [
  ["VariableDeclaration", "ExpressionStatement", "Conditional", "ReturnStatement", "Terminate"],
  [1, 2, 1, 1, 8],
];

PropertyWeights.VariableDeclaration = {};

PropertyWeights.VariableDeclaration.declarations = [
  ["VariableDeclarator", "Terminate"],
  [1, 1],
];

PropertyWeights.VariableDeclarator = {};
PropertyWeights.VariableDeclarator.id = [["NewIdentifier"], [1]];

PropertyWeights.VariableDeclarator.init = [
  ["Literal", "BinaryExpression"],
  [1, 1],
];

PropertyWeights.NewIdentifier = {};

PropertyWeights.ExistingIdentifier = {};

PropertyWeights.MathIdentifier = {};
PropertyWeights.MathIdentifier.properties = [["AbsIdentifier"], [1]];

PropertyWeights.AbsIdentifier = {};

PropertyWeights.ConsoleIdentifier = {};

PropertyWeights.ConsoleIdentifier.properties = [["LogIdentifier"], [1]];

PropertyWeights.MathIdentifier = {};

PropertyWeights.MathIdentifier.properties = [["AbsIdentifier"], [1]];

PropertyWeights.AbsIdentifier = {};

PropertyWeights.LogIdentifier = {};

PropertyWeights.MemberExpression = {};
PropertyWeights.MemberExpression.object = [
  ["ConsoleIdentifier", "MathIdentifier"],
  [0, 1],
];

PropertyWeights.ArrayExpression = {};
PropertyWeights.ArrayExpression.elements = [
  ["Identifier"],
  [1],
];

PropertyWeights.ExpressionStatement = {};
PropertyWeights.ExpressionStatement.expression = [
  ["BinaryExpression", "CallExpression", "MemberExpression", "AssignmentExpression", "UpdateExpression", "ArrayExpression"],
  [1, 1, 0, 5, 1],
];
PropertyWeights.AssignmentExpression = {};
PropertyWeights.AssignmentExpression.left = [["ExistingIdentifier"], [1]];

PropertyWeights.AssignmentExpression.right = [
  ["Literal", "BinaryExpression", "ExistingIdentifier"],
  [1, 3, 2],
];

PropertyWeights.CallExpression = {};

PropertyWeights.CallExpression.callee = [["MemberExpression"], [1]];

PropertyWeights.CallExpression.arguments = [
  ["Literal", "Terminate"],
  [1, 2],
];

PropertyWeights.BinaryExpression = {};
PropertyWeights.BinaryExpression.left = [
  ["Literal", "ExistingIdentifier", "BinaryExpression"],
  [1, 2, 4],
];

PropertyWeights.BinaryExpression.right = [
  ["Literal", "ExistingIdentifier"],
  [4, 1],
];

PropertyWeights.BinaryComparisonExpression = {};
PropertyWeights.BinaryComparisonExpression.left = [
  ["Literal", "ExistingIdentifier", "BinaryExpression"],
  [1, 2, 4],
];

PropertyWeights.BinaryComparisonExpression.right = [
  ["Literal", "ExistingIdentifier"],
  [4, 3],
];

PropertyWeights.LiteralString = {};

PropertyWeights.LiteralNumber = {};

PropertyWeights.LiteralBoolean = {};

PropertyWeights.IfStatement = {};
PropertyWeights.IfStatement.test = [
  ["ExistingIdentifier", "BinaryExpression"],
  [1, 1],
];

PropertyWeights.IfStatement.consequent = [["BlockStatement"], [1]];

PropertyWeights.IfElseStatement = {};
PropertyWeights.IfElseStatement.test = [
  ["ExistingIdentifier", "BinaryExpression"],
  [1, 4],
];

PropertyWeights.IfElseStatement.consequent = [["BlockStatement"], [1]];

PropertyWeights.IfElseStatement.alternate = [["BlockStatement"], [1]];

PropertyWeights.BlockStatement = {};
PropertyWeights.BlockStatement.body = [
  ["VariableDeclaration", "ExpressionStatement", "Conditional", "ReturnStatement", "Terminate"],
  [1, 5, 7, 5, 20],
];

PropertyWeights.ForStatement = {};
PropertyWeights.ForStatement.init = [["VariableDeclaration"], [1]];

PropertyWeights.ForStatement.test = [["BinaryExpression"], [1]];

PropertyWeights.ForStatement.update = [["UpdateExpression"], [1]];

PropertyWeights.ForStatement.body = [
  ["VariableDeclaration", "ExpressionStatement", "Conditional", "ReturnStatement", "Terminate"],
  [1, 10, 1, 30],
];

PropertyWeights.UpdateExpression = {};
PropertyWeights.UpdateExpression.argument = [["ExistingIdentifier"], [1]];

PropertyWeights.ReturnStatement = {};
PropertyWeights.ReturnStatement.argument = [["ExistingIdentifier"], [1]];

export default PropertyWeights;
