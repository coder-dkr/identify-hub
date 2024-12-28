const Navitems = ['Services','Features','Pricing','Partners','Reviews']
const FooterNavitems = ['Features','Services','Pricing','How to use']
const Serviceitem = [
    {
    img: '/duple.svg',
    title: 'Personal Information removal',
    sub : 'Lets users quickly find answers to their questions without having to search through multiple sources.'
    },
    {
    img: '/alias.svg',
    title: 'Cloaking Alias Profiles',
    sub : 'Lets users quickly find answers to their questions without having to search through multiple sources.'
    },
    {
    img: '/secure.svg',
    title: 'Virtual identities Security',
    sub : 'Lets users quickly find answers to their questions without having to search through multiple sources.'
    }

]

const Featurecontent = [
    {
        sidesvg: '/bluearrow.svg',
        title : 'Protect Personal information',
        points : ["The first step involves identifying all places where your personal information might be present.","Once you've identified where your information is held, the next step is to contact the administrators of this platform","Removing personal information is not a one-time task but requires ongoing vigilance.","There are professional services and tools available that specialise in personal information removal."],
        banner : '/feat1.svg'
    },
    {
        sidesvg: '/purplearrow.svg',
        title : 'Detailed Reporting',
        points : ["The first step involves identifying all places where your personal information might be present.","Once you've identified where your information is held, the next step is to contact the administrators of this platform","Removing personal information is not a one-time task but requires ongoing vigilance.","There are professional services and tools available that specialise in personal information removal."],
        banner : '/feat2.svg'
    },
    {
        sidesvg: '/greentick.svg',
        title : 'Secure All Data',
        points : ["The first step involves identifying all places where your personal information might be present.","Once you've identified where your information is held, the next step is to contact the administrators of this platform","Removing personal information is not a one-time task but requires ongoing vigilance.","There are professional services and tools available that specialise in personal information removal."],
        banner : '/feat3.svg'
    },
]

const Prices = [
    {
        head: "Basic",
        sub: "AI chatbot, personalized recommendations",
        price : { cur : "$" , amount : "0"},
        btntxt : "Get started",
        points: ["Type of threat","Online presence", "Access to all molecules", "Notability"]
    },
    {
        head: "Hard",
        sub: "AI chatbot, personalized recommendations",
        price : { cur : "$" , amount : "9.99"},
        btntxt : "Get started",
        points: ["Type of threat","Online presence", "Access to all molecules", "Notability"]
    },{
        head: "Medium",
        sub: "AI chatbot, personalized recommendations",
        price : { cur : "$" , amount : "20.99"},
        btntxt : "Get started",
        points: ["Type of threat","Online presence", "Access to all molecules", "Notability"]
    }
]


const Testimonials = [

    {
        name : "Daddy Roy",
        job : "Developer",
        time : "Since eternity",
        para : "Assume an intellectual comment"
    },
    {
        name : "Joe Mama",
        job : "Mama",
        time : "10 day agao",
        para : "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details"
    },
    {
        name : "David J. Karem",
        job : "Buisness",
        time : "1 day agao",
        para : "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details"
    }
    ,{
        name : "Halu D wai",
        job : "Haluwai",
        time : "3 day agao",
        para : "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details"
    }
]

export {Navitems , Serviceitem, FooterNavitems,Featurecontent, Testimonials , Prices }