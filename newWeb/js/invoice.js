function ObserverList(){
    this.observerList = [];
    }

    ObserverList.prototype.Add = function( obj ){
    return this.observerList.push( obj );
    };

    ObserverList.prototype.Empty = function(){
    this.observerList = [];
    };

    ObserverList.prototype.Count = function(){
    return this.observerList.length;
    };

    ObserverList.prototype.Get = function( index ){
    if( index > -1 && index < this.observerList.length ){
        return this.observerList[ index ];
    }
    };

    ObserverList.prototype.Insert = function( obj, index ){
    var pointer = -1;

    if( index === 0 ){
        this.observerList.unshift( obj );
        pointer = index;
    }else if( index === this.observerList.length ){
        this.observerList.push( obj );
        pointer = index;
    }

    return pointer;
    };

    ObserverList.prototype.IndexOf = function( obj, startIndex ){
    var i = startIndex, pointer = -1;

    while( i < this.observerList.length ){
        if( this.observerList[i] === obj ){
        pointer = i;
        }
        i++;
    }

    return pointer;
    };

    ObserverList.prototype.RemoveAt = function( index ){
    if( index === 0 ){
        this.observerList.shift();
    }else if( index === this.observerList.length -1 ){
        this.observerList.pop();
    }
    };

    // Extend an object with an extension
    function extend( extension, obj ){
    for ( var key in extension ){
        obj[key] = extension[key];
    }
    }

    function Subject(){
    this.observers = new ObserverList();
    }

    Subject.prototype.AddObserver = function( observer ){
    this.observers.Add( observer );
    }; 

    Subject.prototype.RemoveObserver = function( observer ){
        //alert(observer.value);
    this.observers.RemoveAt( this.observers.IndexOf( observer, 0 ) );
    }; 

    Subject.prototype.Notify = function( context ){
    var observerCount = this.observers.Count();
    for(var i=0; i < observerCount; i++){
        this.observers.Get(i).Update( context );
    }
    };

    // The Observer
    function Observer(){
    this.Update = function(){
        // ...
    };
    }

    // 我们DOM 元素的引用
        var removelist = [];
        var controlTextbox = document.getElementById( "mainTextbox" ),
        addBtn = document.getElementById( "addNewObserver" ),
        container = document.getElementById( "observersContainer" );

        // 具体的被观察者

        //Subject 类扩展controlTextbox 类
        extend( new Subject(), controlTextbox );

        //改变textbox 将会触发对观察者的通知
        controlTextbox["oninput"] = function(){

            //alert(removelist.length);
            //for (var i in removelist){
                //alert(removelist[i].value);
                //controlTextbox.RemoveObserver(removelist[i]);
            //}
            controlTextbox.Notify(controlTextbox.value)
        };

        addBtn["onclick"] = AddNewObserver;

        

        // 具体的观察者

        function AddNewObserver(){

            //建立一个新的用于增加的textbox
            var text  = document.createElement( "input" );
            text.type = "text";
            text.value = controlTextbox.value;
            
            
            /*
            function(){ 
                //this.select();
                text.style = "brackground:red";
                controlTextbox.RemoveObserver(text);
            }
            */
            // 使用Observer 类扩展textbox
            extend( new Observer(), text );

            // 使用定制的Update函数重载
            text.Update = function( value ){
            this.value = value;
            };

            text["onclick"]= function(){
                //this.select();
                this.style = "border-color:red;";
                var foundIndex=-1;
                for(var i=0;i< controlTextbox.observers.observerList.length;i++){
                    if(this === controlTextbox.observers.Get(i)){
                        foundIndex=i;
                    }
                }
                if(foundIndex !=-1){
                    controlTextbox.observers.observerList.splice(foundIndex,1);
                }else{

                }
                //removelist.push(this);
                //this.value = "select";
            }
            // 增加新的观察者到我们主要的被观察者的观察者列表中
            controlTextbox.AddObserver( text );

            // 将元素添加到容器的最后
            container.appendChild( text );
}