import loadInitialContent from './initialLoad';

function createHomePageContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    loadInitialContent();
}


export default createHomePageContent;