/**
 * Created by melodytempleton on 8/2/17.
 */
var myReact = {

     createElement: function(element, propsObject, innerHtml){
        propsObject = (typeof propsObject !== "object") ? {} : propsObject;
        propsObject.children = innerHtml;

        return element = {
            type: element,
            props: propsObject
        }

    }
};


const elementOne = myReact.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

const elementTwo = myReact.createElement(
    'h4',
    {},
    'How are we doing today?'
);

function createHtmlString(elementObject) {

    return "<"+elementObject.type+" class="+elementObject.props.className+">"+elementObject.props.children+"</"+elementObject.type+">";
}

// document.getElementById("myDiv").innerHTML="<"+element.type+" class="+element.props.className+">"+element.props.children+"</"+element.type+">";


document.getElementById("myDiv").innerHTML=createHtmlString(elementOne);
document.getElementById("myDiv").innerHTML+=createHtmlString(elementTwo);