// Theme Mode

if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', 'light');
}
imply_theme();

document.getElementById('theme_btn').addEventListener('click', () => {
    let theme = localStorage.getItem('theme');

    if(theme === 'light'){
        localStorage.setItem('theme', 'dark');
    }else{
        localStorage.setItem('theme', 'light');
    }

    imply_theme();
});

function imply_theme(){
    let theme = localStorage.getItem('theme');
    let theme_btn = document.getElementById('theme_btn');

    if(theme === 'light'){
        document.documentElement.style.setProperty("--theme", "light");
        document.documentElement.style.setProperty("--color-bg", "#fff");
        document.documentElement.style.setProperty("--color-bg-header", "#f5f7ff");
        document.documentElement.style.setProperty("--color-bg-card", "#f0f2fa");
        document.documentElement.style.setProperty("--color-bg-card-hover", "#e0e2f0");
        document.documentElement.style.setProperty("--color-muted", "#63687e");
        document.documentElement.style.setProperty("--color-foreground", "#1e202a");
        document.documentElement.style.setProperty("--color-border", "#878a9b");
        theme_btn.classList.remove('on_dark_mode');
    }else{
        document.documentElement.style.setProperty("--theme", "dark");
        document.documentElement.style.setProperty("--color-bg", "#1D2029");
        document.documentElement.style.setProperty("--color-bg-header", "#20222F");
        document.documentElement.style.setProperty("--color-bg-card", "#252a41");
        document.documentElement.style.setProperty("--color-bg-card-hover", "#343c56");
        document.documentElement.style.setProperty("--color-muted", "#8b97c6");
        document.documentElement.style.setProperty("--color-foreground", "#fff");
        document.documentElement.style.setProperty("--color-border", "#37394e");
        theme_btn.classList.add('on_dark_mode');
    }
}