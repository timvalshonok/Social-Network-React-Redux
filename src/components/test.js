var a = {
    name: 'it kamasutra js',
    protocol: "https",
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'egor',],
    classRoom: {
        teacher: {
            name: 'wew',
            age: 18
        }
    }
}

var b = {...a}

b.students.push('Karina');

console.log(a);