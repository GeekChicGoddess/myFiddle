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


const element = myReact.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

document.getElementById("myDiv").innerHTML="<"+element.type+">"+element.props.children+"</"+element.type+">";