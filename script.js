document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulação de login simples
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
