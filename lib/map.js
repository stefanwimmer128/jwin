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
    };
    
    return $;
};
