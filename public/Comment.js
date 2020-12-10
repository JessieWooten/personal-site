const message = `
▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▓▒▒▓▒▒▒▒
▒▒▒▒▓▒▒▓▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒
▒▓▒▒▒▒▒▒▒▒▓▒
▒▒▓▓▓▓▓▓▓▓▒▒
▒▒▒▒▒▒▒▒▒▒▒▒
Hey!
I thought you might look here...😊
If you're wondering, this site was build with React.js and Tailwind CSS. 
It's deployed with Google Firebase.
I built all my components and animations from scratch. 
My favicon is a play off the JavaScript logo (because JS is dope!)
And my favorite hobbies are playing drums 🥁, working out 💪, and playing flag football 🏈.
I hope you enjoy your time on my site!
`;
console.log(message)
const comment = document.createComment(message);
document.body.insertBefore(comment, document.body.firstChild);