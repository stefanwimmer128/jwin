/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 18.06.16.
 */

module.exports = ($) =>
{
    $.Map = function ()
    {
        this.keys = [];
        this.values = [];
        
        this.put = (key, value) =>
        {
            if (this.exists(key))
            {
                for (const i in this.keys)
                {
                    if (key === this.keys[i])
                    {
                        this.values[i] = value;
                    }
                }
            } else {
                this.keys.push(key);
                this.values.push(value);
            }
        };
        
        this.get = (key) =>
        {
            let value = undefined;
            for (const i in this.keys)
            {
                if (key === this.keys[i])
                {
                    value = this.values[i];
                }
            }
            return value;
        };
        
        this.exists = (key) =>
        {
            for (const i in this.keys)
            {
                if (key === this.keys[i]) return true;
            }
            return false;
        };
        
        this.size = () => this.keys.length;
        
        this.iterator = () => new $.MapIterator(this.keys, this.values);
    };
    
    $.MapIterator = function (keys, values)
    {
        this.keys = keys;
        this.values = values;
        this.index = 0;
        
        this.hasNext = () => typeof this.keys[this.index] !== "undefined";
        
        this.next = () =>
        {
            this.index++;
            return {
                key: this.keys[this.index - 1],
                value: this.values[this.index - 1]
            };
        };
    };
    
    return $;
};
