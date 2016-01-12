import $ from "../lib/jquery/dist/jquery";
import ko from "../lib/knockout/dist/knockout";

class IndexViewModel{
    constructor(){
        this.category = ko.observable("Health");
        this.ideas = ko.observableArray();
        
        this.getData(); 
    }
    
    getData() {
        var currentCategory = this.category();
        var url = `data/${currentCategory}-ideas.json`;
        
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.ideas(json);
            });
    }
}
$(() => ko.applyBindings(new IndexViewModel));


class ideaList extends HTMLElement {
    createdCallback(){
        this.innerHTML = `
        <table cellpadding="5">
            <thead>
                <tr style="font-weight:bold">
                    <td>Title</td>
                    <td>I like it</td>
                    <td>It won't work</td>
                </tr>
             </thead>
             <tbody data-bind="foreach: ideas">
                <tr>
                    <td><a data-bind="attr: { href: url }, text: title" target="_blank"></a></td>
                    <td><span data-bind="text: upvotes"></span></td>
                    <td><span  data-bind="text: downvotes"></span></td>         
                </tr>
             </tbody>
        </table>
        `;
    }
}

document.registerElement("idea-list",ideaList);

