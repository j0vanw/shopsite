let auth0Client = null;

async function initAuth0() {
    auth0Client = await createAuth0Client({
        domain: "j0vanw.us.auth0.com",
        client_id: "xyHiOh2mvE3SY8ykCKLo8tT3U1h5oEw5",
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    });

    if (window.location.search.includes("code=")) {
        await auth0Client.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
    }

    updateUI();
}



async function login() {
    await auth0Client.loginWithRedirect();
}

async function logout() {
    auth0Client.logout({
        logoutParams: {
            returnTo: window.location.origin
        }
    });
}

async function signup() {
    const name = document.getElementById('name').value;
    const displayName = document.getElementById('displayname').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('signup_name',name);
    localStorage.setItem('signup_displayName',displayName);
}

window.addEventListener("DOMContentLoaded",() => {
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click",login);
    }

    const signupBtn = document.getElementById("signup-btn");
    if (signupBtn) {
        signupBtn.addEventListener("click",signup);
    }

    const logoutBtn = document.getElementById("logout.btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click",logout);
    }
});