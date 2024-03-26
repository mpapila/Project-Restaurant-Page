function createHoursPageContent() {

    const content = document.getElementById('content');
    content.innerHTML = '';
    const titleDiv = document.createElement('div');
    const title = document.createElement('h1')
    title.textContent = 'Hours';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.justifyContent = 'flex-start';
    content.style.alignItems = 'center';

    const hoursDiv = document.createElement('div')
    let ul = document.createElement('ul')
    ul.style.listStyle = 'none';
    ul.style.paddingInlineStart = '0px';
    ul.style.fontSize = '30px'
    hoursDiv.append(ul)
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let hours = '12 PM to 6 PM'

    for (let i = 0; i < days.length; i++) {
        let li = document.createElement('li')
        li.textContent = `${days[i]} : ${hours}`
        ul.append(li);
    }

    titleDiv.append(title);
    content.append(titleDiv);
    content.append(hoursDiv)
}


export default createHoursPageContent;