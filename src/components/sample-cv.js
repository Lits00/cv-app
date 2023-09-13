export const sampleData = {
    personalInfo: {
        fullName: 'John Doe',
        jobTitle: 'Web Developer',
        email: 'johndoe@email.com',
        phoneNum: '123-45-6789',
        address: 'City name, Country'
    },

    experience: [
        {
            id: crypto.randomUUID(),
            company: 'Company A',
            position: 'Full-Stack Developer',
            startDate: 'July 2021',
            endDate: 'Present',
            workLoc: 'Remote',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos aspernatur beatae nam corrupti minima dolorem. Suscipit officiis aliquid quasi aperiam officia. Exercitationem rem nisi eum ut minus ipsum animi.'
        },
        {
            id: crypto.randomUUID(),
            company: 'Company B',
            position: 'Jr. Front-End Developer',
            startDate: 'April 2019',
            endDate: 'June 2021',
            workLoc: 'City name, Country',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dolore sed impedit dolores error sint commodi sunt neque necessitatibus nulla facere, fugiat natus laboriosam. Mollitia itaque inventore quod ad placeat.'
        }
    ],

    education: [
        {
            id: crypto.randomUUID(),
            school: 'University',
            degree: 'Masters Degree',
            gradDate: 'Month, Year',
            location: 'City name, Country'
        },
        {
            id: crypto.randomUUID(),
            school: 'University',
            degree: 'Bachelors Degree',
            gradDate: 'Month, Year',
            location: 'City name, Country'
        }
    ]
}