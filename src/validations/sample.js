var SampleProblems = {};

SampleProblems.easy = {};
SampleProblems.easy.name = "Easy";
SampleProblems.easy.description = 'Answer should be whatever value is in the b variable.';
SampleProblems.easy.validations = [{
    inputs: {
        'answer': null,
        'a': true,
        'b': 20,
        'c': 30
    },
    validation: function(answer) {
        return answer == 20;
    }
}];


SampleProblems.medium = {};
SampleProblems.medium.name = "Medium";
SampleProblems.medium.description = 'If a is true answer should be b, if a is false answer should be c.';
SampleProblems.medium.validations = [{
    inputs: {
        'answer': null,
        'a': true,
        'b': 1,
        'c': 2
    },
    validation: function(answer) {
        return answer == 1;
    }
},{
    inputs: {
        'answer': null,
        'a': true,
        'b': "B",
        'c': "C"
    },
    validation: function(answer) {
        return answer == "B";
    }
},{
    inputs: {
        'answer': null,
        'a': true,
        'b': 20,
        'c': 30
    },
    validation: function(answer) {
        return answer == 20;
    }
},{
    inputs: {
        'answer': null,
        'a': false,
        'b': "B",
        'c': "C"
    },
    validation: function(answer) {
        return answer == "C";
    }
}, {
    inputs: {
        'answer': null,
        'a': false,
        'b': 20,
        'c': 30
    },
    validation: function(answer) {
        return answer == 30;
    }
}];

SampleProblems.EVEN_ODD = {};
SampleProblems.EVEN_ODD.name = "Even/Odd";
SampleProblems.EVEN_ODD.description = 'If a is even answer should be true, if a is odd answer should be false.';
SampleProblems.EVEN_ODD.validations = [{
    inputs: {
        'answer': null,
        'a': 2
    },
    validation: function(answer) {
        return typeof answer == 'boolean' && answer == true;
    }
}, {
    inputs: {
        'answer': null,
        'a': 4
    },
    validation: function(answer) {
        return typeof answer == 'boolean' && answer == true;
    }
}, {
    inputs: {
        'answer': null,
        'a': 1
    },
    validation: function(answer) {
        return typeof answer == 'boolean' && answer == false;
    }
}, {
    inputs: {
        'answer': null,
        'a': 3
    },
    validation: function(answer) {
        return typeof answer == 'boolean' && answer == false;
    }
}, {
    inputs: {
        'answer': null,
        'a': 0
    },
    validation: function(answer) {
        return typeof answer == 'boolean' && answer == true
    }
}, {
    inputs: {
        'answer': null,
        'a': 5
    },
    validation: function(answer) {
        return typeof answer == 'boolean' && answer == false;
    }
}];


SampleProblems.SUM_2 = {};
SampleProblems.SUM_2.name = "Sum 2";
SampleProblems.SUM_2.description = 'Answer should be a sum of a and b';
SampleProblems.SUM_2.validations = [{
    inputs: {
        'answer': null,
        'a': 2,
        'b': 3
    },
    validation: function(answer) {
        return answer == 5;
    }
},{
    inputs: {
        'answer': null,
        'a': 1,
        'b': 1
    },
    validation: function(answer) {
        return answer == 2;
    }
},{
    inputs: {
        'answer': null,
        'a': 1,
        'b': 2
    },
    validation: function(answer) {
        return answer == 3;
    }
},{
    inputs: {
        'answer': null,
        'a': 2,
        'b': 2
    },
    validation: function(answer) {
        return answer == 4;
    }
}];

SampleProblems.SUM_3 = {};
SampleProblems.SUM_3.name = "Sum 3";
SampleProblems.SUM_3.description = 'Answer should be a sum of a,b,c in that order.';
SampleProblems.SUM_3.validations = [{
    inputs: {
        'answer': null,
        'a': 2,
        'b': 3,
        'c': 4
    },
    validation: function(answer) {
        return answer == 9;
    }
},{
    inputs: {
        'answer': null,
        'a': 1,
        'b': 1,
        'c': 1
    },
    validation: function(answer) {
        return answer == 3;
    }
},{
    inputs: {
        'answer': null,
        'a': 2,
        'b': 2,
        'c': 4
    },
    validation: function(answer) {
        return answer == 8;
    }
},{
    inputs: {
        'answer': null,
        'a': 1,
        'b': 100,
        'c': 1
    },
    validation: function(answer) {
        return answer == 102;
    }
},{
    inputs: {
        'answer': null,
        'a': 'f',
        'b': 'o',
        'c': 'o'
    },
    validation: function(answer) {
        return answer == 'foo';
    }
}]
export default SampleProblems;