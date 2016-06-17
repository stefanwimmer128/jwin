/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 17.06.16.
 */
module.exports = ($) =>
{
    $.Exception = function (name, message)
    {
        this.name = name;
        this.message = message;
        
        this.toString = () => this.name + ": " + this.message;
    };
    
    $.IncompatibleTypeException = function ()
    {
        Exception.call(this,
            "IncompatibleTypeException",
            "Given type is incompatible with current operation"
        );
    };
    
    return $;
};
