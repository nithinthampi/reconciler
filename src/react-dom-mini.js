import ReactReconciler from "react-reconciler";


const reconciler = ReactReconciler({
    createInstance(type,props,rootContainerInstance,hostContext,internalInstanceHandle){    
        const el = document.createElement(type);
        ["src", "alt", "href", "className", "rel", "targer"].forEach(prop => {
            if(props[prop]){
                el[prop] =  props[prop];
            }
        })
        if (props.onClick){
            el.addEventListener("click", props.onClick);
        }
        if(props.color){
            el.style.background =  props.color;
        }
        return el;
    },
    createTextInstance(text, rootContainerInstance,hostContext,internalInstanceHandle){
        const el =  document.createTextNode(text);
        return el;
    },
    appendInitialChild(parent, child){
        parent.appendChild(child)
    },
    appendChild(parent, child){
        parent.appendChild(child)
    },
    appendChildToContainer(container, child){
        container.appendChild(child)
    },
    removeChildFromContainer(container, child){
        container.removeChild(child);
    },
    removeChild(parent, child){
        parent.removeChild(child);
    },
    insertBefore(parent, child, beforeChild){
        parent.insertBefore(child, beforeChild);
    },
    insertInContainerBefore(container, child, beforeChild){
        container.inertBefore(child, beforeChild)
    },
    prepareUpdate(instance, type, oldProps,newProps,rootContainerInstance, hostContext){
        const payload = {};
        if(oldProps.color !== newProps.color){
            payload.newColor = newProps.color;
        }
        return payload;
    },
    commitUpdate(instance, updatePayload){
        if(updatePayload.newColor){
            instance.style.background = updatePayload.newColor
        }
    },
    supportsMutation: true,
    getRootHostContext(){},
    getChildHostContext(){},
    shouldSetTextContent(){},
    prepareForCommit(){},
    resetAfterCommit(){},
    finalizeInitialChildren(){}
})


export  default  {
    render(whatToRender, dom){
        const container = reconciler.createContainer(dom,false, false);
        reconciler.updateContainer(whatToRender, container)
    }
}

