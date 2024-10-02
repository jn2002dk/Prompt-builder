document.getElementById('save').addEventListener('click', function() {
    const apikey = document.getElementById('api_key').value;
    const apiurl = document.getElementById('api_url').value;
    localStorage.setItem('apikey', apikey);
    localStorage.setItem('apiurl', apiurl);
    window.location.href = 'index.html';
})

document.getElementById('cancel').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('api_key').addEventListener('click', function() {
    document.getElementById('api_key').value = '';
    if (document.getElementById('api_url').value === '') {
        document.getElementById('api_url').value = 'API url';
    }
});

document.getElementById('api_url').addEventListener('click', function() {
    document.getElementById('api_url').value = '';
    if (document.getElementById('api_key').value === '') {
        document.getElementById('api_key').value = 'API key';
    }
});