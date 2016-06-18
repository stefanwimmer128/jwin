/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 17.06.16.
 */

module.exports = ($) =>
{
    $.Group = function (array = [])
    {
        if (! Array.isArray(array)) throw new $.IncompatibleTypeException();
        
        this.children = array;
        
        this.add = (val) => this.children.push(val);
        
        this.set = (i, val) =>
        {
            if (typeof i !== "number") throw new $.IncompatibleTypeException();
            
            this.children[i] = val;
        };
        
        this.size = () => this.children.length;
        
        this.get = (i) => this.children[i];
        
        this.iterator = () => new $.Iterator(this.children);
        
        this.reduce = (fn, start) => this.children.reduce(fn, start);
        
        this.map = (fn) => new $.Group(this.children.map(fn));
        
        this.filter = (fn) => new $.Group(this.children.filter(fn));
        
        this.find = (fn) => this.children.find(fn);
        
        this.shift = (shift = 1) =>
        {
            const group = new $.Group();
            for (let i = shift; i < this.size(); i++)
            {
                group.add(this.get(i));
            }
            
            return group;
        };
        
        this.sort = (fn) => this.children.sort(fn);
    };
    
    $.Iterator = function (array = [])
    {
        if (! Array.isArray(array)) throw new $.IncompatibleTypeException();
        
        this.array = array;
        this.index = 0;
        
        this.hasNext = () => typeof this.array[this.index] !== "undefined";
        
        this.next = () =>
        {
            this.index++;
            return this.array[this.index - 1];
        };
    };
    
    return $;
};
