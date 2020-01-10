$(document).ready(function () {
    var screenId = $("#screen_id").val().substring(0, $("#screen_id").val().indexOf("_", 5)+1);

    var updateId = function ($element, idString, index) {
        $element.attr('id', idString+ index);
    }

    var elementTypeArray = ['DIV', 'SPAN', 'TABLE', 'INPUT', 'TD', 'SELECT', 'TEXTAREA','A'];
    var elementTypeCounters = $.parseJSON('{ }');


    $("*").each(function (index) {
        var $element = $(this);
        var elementType = $element.get(0).tagName;
        if ($element.attr('id') == null && $.inArray(elementType, elementTypeArray) >= 0) {
            var indexValue = 1;
            var idString = screenId.concat(elementType).concat('_');
            var attrType = $element.attr('type');
            if (typeof attrType !== typeof undefined && attrType !== false) {
                idString= idString + attrType + '_';
            }

            var attrName = $element.attr('name');
            if (typeof attrName !== typeof undefined && attrName !== false) {
                idString=  idString + attrName + '_';
            }
            
            if (elementTypeCounters[elementType] >= 1) {
                indexValue = elementTypeCounters[elementType];
                indexValue = indexValue+1;
            }
            elementTypeCounters[elementType] = indexValue;
            updateId($element, idString, indexValue);
        }
    })
});