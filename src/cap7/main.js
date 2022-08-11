/*const juan1 = {
    name: "Juan DC",
    userName: "juandc",
    points: 100,
    socialMedia: {
        twiter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practicos de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practicos de HTML y CSS",
                "Curso Responsive Desing",
                "Curso Sistemas de Dise;o",
            ]
        },
        {
            name: "Escuela de Video Juegos",
            courses: [
                "Curso Introduccion a la Produccion de Vgs",
                "Curso Unreal Engine",
                "Curso de Unity 3D",
            ]
        },
    ],
};

const miguel1 = {
    name: "Migueldc",
    userName: "migueldc",
    points: 1000,
    socialMedia: {
        twiter: "fmigueldc",
        instagram: "fmigueldc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso DataBuniess",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practicos de HTML y CSS",
                "Curso Responsive Desing",
                "Curso Sistemas de Dise;o",
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBuniess",
                "Curso DataViz",
                "Curso tableau",
            ]
        },
    ],
};*/

class LearningPaths{
    constructor({
        name, 
        course = [],
    })
    {
        this.name = name;
        this.course = course;
    }
    push(name,course){
        this.learningPaths.push(name,course);
    }
}

const myLearningPaths = new LearningPaths();

class Student {
    constructor({
        name,
        email,
        twiter = undefined,
        instagram = undefined,
        userName,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = myLearningPaths,
    })
    {
        this.name = name;
        this.email = email;
        this.socialMedia = {
            twiter,
            instagram,
            facebook,
        };
        this.userName = userName;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student ({
    name: 'Juan',
    userName: 'juandc',
    email: 'notiene@gmail.com',
    twiter: 'fjuandc',
});

const miguel2 = new Student ({
    name: 'miguel',
    userName: 'migueldc',
    email: 'notiene@gmail.com',
    twiter: 'fmigueldc',
});