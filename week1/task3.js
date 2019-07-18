let people = {
    1 : {
        firstname: 'John',
        lastname: 'Doe'
    },

    2: {
        firstname: 'Jane',
        lastname: 'Doe'
    },

    3: {
        firstname: 'Joe',
        lastname: 'Dane'
    }
};

console.log(people);

let str = JSON.stringify(people);
console.log(str);

let people_parse = JSON.parse(str);
console.log(people_parse);