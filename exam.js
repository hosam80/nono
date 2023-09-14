const ali = document.queryCommandValue('.toggle');
const aliii = document.queryCommandValue('.showcase');
ali.addEventlistener('click',() =>{
    ali.classlist.toggel('active')
    aliii.classlist.toggel('active')
})