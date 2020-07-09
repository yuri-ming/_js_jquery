$('div.foo').click(function () {
    $(this).slideUp();
});

var foo={foo:'bar', hello:'world'};

var $foo = $(foo);

var test1=$foo.prop('foo');
console.log(test1);

$foo.prop('foo','foobar');

var test2=$foo.prop('foo');
console.log(test2);