const student = [{
        name: "awais",
        age: 21,
        semester: 04
    },
    {
        name: "abc",
        age: 22,
        semester: 05
    }
]

console.log("Press 1 for Promise method")
console.log("Press 2 for callback method")
console.log("Press 3 for Async/await method")

let arg = parseInt(process.argv[2]) // node case.js 1 (pass any number whrn running code in terminal)


console.log(arg)
switch (arg) {
    case 1:
        console.log('Promise method');


        function enroll(stu) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    student.push(stu)
                    console.log("student enrolled")
                    console.log(stu)
                    const error = false;
                    if (!error) {
                        resolve();
                    } else {

                        console.log("student not enrolled")
                        reject();
                    }
                }, 1000);

            })
        }
        console.log('\t' + '**** CMS ****' + '\t')

        function getstu() {
            setTimeout(() => {
                student.map(function (stu) {
                    console.log(stu)

                })
                console.log('Data have been fetch successfully')
            }, 3000);

        }

        let newstu = {
            name: "xyz",
            age: 23,
            semester: 06
        }
        enroll(newstu)
            .then(getstu)
            .catch(() => console.log('find some error'));
        break;

        //******************************************************************************************** */
    case 2:
        console.log('callback method');


        function enroll1(stu1, getstu1) {

            setTimeout(() => {
                student.push(stu1)
                console.log("student enrolled" + stu1)
                getstu1();
            }, 3000);

        }

        console.log('\t' + '**** CMS ****' + '\t')

        function getstu1(data1) {
            setTimeout(() => {
                student.forEach(function (data1) {
                    console.log(data1)

                })
                console.log('Data have been fetch successfully')
            }, 1000);

        }

        let newstu1 = {
            name: "xyz",
            age: 23,
            semester: 06
        }
        enroll1(newstu1, getstu1);

        break;

        //******************************************************************************************** */
    case 3:
        console.log('Async/await method');
        async function Awais() {
            console.log('Hello')
            const response = await
            console.log('before response');
            const user = await response //.json();
            console.log('result')
            return user;
        }

        console.log('before calling Awais function')
        let a = Awais();
        console.log('After calling Awais function')
        console.log(a);
        a.then(data => console.log(data))
        console.log('last line')
        break;

        //******************************************************************************************** */
    default:
        console.log("I don't know such values");
}