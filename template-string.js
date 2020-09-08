const person = {
    name: 'Jair Bolsonaro',
    size: 'large',
    skills: ['administrator'],
    age: 55,
    location: 'Brasilia'
}

function bio(intro, { name, age }) {
	const strAge = age > 17 ? 'is old': 'is young';
	return `${intro[0]} ${strAge}. ${age} years ${name}`
}

bio`This man ${ person }`