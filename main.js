
window.onload = function() 
{ 
    filterObjects("all");
}

function filterObjects()
{
    var withIngredients = [];
    var withoutIngredients = [];
    var x = [];
    x = document.getElementsByTagName("button");
    
    for(i = 0; i < x.length; i++)
    {
        if(x[i].value == "2")
        {
            withIngredients.push(x[i].id);
        }
    }
    for(i = 0; i < x.length; i++)
    {
        if(x[i].value == "3")
        {
            withoutIngredients.push(x[i].id);
        }
    }
    

    showAll();
    if(withIngredients.length > 0)
    {
        showWithIngredients(withIngredients);
    }
    if(withoutIngredients.length > 0)
    {
        showWithoutIngredients(withoutIngredients);
    }
}

function showAll()
{
    var x = [];

    x = document.getElementsByClassName("box");
    for(i = 0; i < x.length; i++)
    {
        x[i].hidden = false;
    }
}

function resetAllButtons()
{
    var x = [];
    x = document.getElementsByTagName("button");
    for(i = 1; i < x.length; i++)
    {
        x[i].value = "1";
        x[i].className = "filterNeutral";
    }
    filterObjects();
}

function showWithIngredients(filters)
{
    for(i = 0; i < filters.length; i++)
    {
        filterItems = document.getElementsByClassName("box");
        for(j = 0; j < filterItems.length; j++)
        {
            var shouldHide = true;
            var ingArr = filterItems[j].className.split(" ");
            for(k = 0; k < ingArr.length; k++)
            {
                if(ingArr[k] == filters[i])
                {
                    shouldHide = false;
                }
            }
            if(shouldHide)
            {
                filterItems[j].hidden = true;
            }
        }
    }

}

function showWithoutIngredients(filters)
{
    for(i = 0; i < filters.length; i++)
    {
        filterItems = document.getElementsByClassName("box");
        for(j = 0; j < filterItems.length; j++)
        {
            var ingArr = filterItems[j].className.split(" ");
            for(k = 0; k < ingArr.length; k++)
            {
                if(ingArr[k] == filters[i])
                {
                    filterItems[j].hidden = true;
                }
            }
        }
    }
}

function togglebutton(val , id) {

    if (val == "1") {
        
        document.getElementById(id).className = "filterWith";
        
        document.getElementById(id).value = "2";
        filterObjects();
    } else if (val == "2") {
        
        document.getElementById(id).className = "filterWithout";
        
        document.getElementById(id).value = "3";
        filterObjects();
    } else if (val == "3") {
        
        document.getElementById(id).className = "filterNeutral";
        
        document.getElementById(id).value = "1";
        filterObjects();
    }
  }