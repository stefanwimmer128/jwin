/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 17.06.16.
 */

module.exports = ($) =>
{
    $.Group = function (array = [])
    {
        if (! Array.isArray(array)) throw new $.IncompatibleTypeException();
        
        this.children = array;
        
        this.add = (item) => this.children.push(item);
        
        this.size = () => this.children.length;
        
        this.iterator = () => new $.Iterator(this.children);
        
        this.reduce = (fn, start) => new $.Group(this.children.reduce(fn, start));
        
        this.map = (fn) => new $.Group(this.children.map(fn));
        
        this.filter = (fn) => new $.Group(this.children.filter(fn));
        
        this.find = (fn) => this.children.find(fn);
        
        this.shift = (shift = 1) =>
        {
            const itr = this.iterator();
            const index = 0;
            const group = new $.Group();
            while (itr.hasNext())
            {
                if (index >= shift) group.add(itr.next());
            }
            return group;
        };
    };
    
    $.Iterator = function (array = [])
    {
        if (! Array.isArray(array)) throw new $.IncompatibleTypeException();
        
        this.array = array;
        this.index = 0;
        
        this.hasNext = () => this.array[this.index] !== undefined;
        this.next = () =>
        {
            this.index++;
            return this.array[this.index - 1];
        };
    };
    
    return $;
};
