function checkErreur(element, id)
{
    if (element.value == '')
    {
        document.getElementById(id).classList.remove("cache");
    }
    else
    {
        document.getElementById(id).classList.add("cache");
    }
}

document.querySelector("form").addEventListener("submit", (ev) => 
{
    ev.preventDefault();

    checkErreur(nom, "verif_nom");
    checkErreur(prenom, "verif_prenom");
    checkErreur(mail, "verif_mail");
    checkErreur(sujet, "verif_sujet");
    checkErreur(message, "verif_message");

    /*document.getElementById("verif").classList.remove("cache");
    
    document.getElementById("verif_prenom").classList.remove("cache");
    document.getElementById("verif_mail").classList.remove("cache");
    document.getElementById("verif_sujet").classList.remove("cache");
    document.getElementById("verif_cgu").classList.remove("cache");

    document.getElementById("verif_message").classList.remove("cache");*/
});