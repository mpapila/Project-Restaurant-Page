function loadInitialContent() {

    const content = document.getElementById('content');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv')
    const title = document.createElement('h1');
    title.textContent = 'HomePage';
    titleDiv.style.display = 'flex';
    titleDiv.style.justifyContent = 'center';
    titleDiv.style.alignItems = 'center';

    const homeContent = document.createElement('div');
    homeContent.textContent = 'Welcome to Our Restaurant Discover the finest dining experience in town.'
    
    
    content.appendChild(titleDiv);
    titleDiv.appendChild(title);
    content.append(homeContent);


}

export default loadInitialContent;