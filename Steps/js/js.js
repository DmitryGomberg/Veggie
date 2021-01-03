let tab = function(){
    let tabNav = document.querySelectorAll('.tabs-nav_item');
    let tabContent = document.querySelectorAll('.tab');
    let tabName;
    
    tabNav.forEach(item=>{
        item.addEventListener('click', selectTabNav)
    });
    
    function selectTabNav (){
        tabNav.forEach(item=>{
            item.classList.remove('is-active');
            
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    };
    
    function selectTabContent(tabName){
        tabContent.forEach(item=>{
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        });
    }
};

$(document).ready(function(){
    $('.menu_burger').click(function(event){
        $('.menu_burger,.head_menu').toggleClass('__active');
        $('body').toggleClass('lock');
    });
});

tab();




