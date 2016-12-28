1typeof
var alert()
var box;
alert(typeof box); 
var box=true;
alert(typeof box);
var box={};
alert(typeof box); 
var box=new Object();
alert(typeof box); 
var box=null;
alert(typeof box); 
function box(){
}
alert(typeof box);

2Undefined类型
var box=undefined;
var box;
alert(typeof box);
alert(typeof age);

3Null类型
var box=null;
if(box!=null){
	alert(“对象已经创建成功”);
}
var box=’’; 
var box=0;
var box=false;
alert(underfined==null);


4Boolean类型
var box=true;
alert(box==1);//true
alert(typeof box==typeof 1);alert(box===1);//false
var box=”chenweizhen”;
alert(Boolean(box));
var box=””;
alert(Boolean(box));//flase
var box=”lee”;
if(box){
	alert(“zhen”);
}else{
	alert(“jia”);
}
 

5Number类型
var box=250;//十进制整型
var box=070;//八进制56，输出都是十进制
var box=0xA;//16进制
var box=3.8;//浮点类型
var box=03.8;//报错
var box=3.80;//输出3.8
var box=0.8;//0.8
var box=00.8;//报错
var box=.8;//0.8，有效但不推荐
var box=8.0;//自动转换成整型
var box=4120;// var box=4.12e3 科学计数法

alert(0.1+0.2);//0.30000000000000004
alert(Number.MIN_VALUE);//最小值
alert(Number.MAN_VALUE);//最大值
alert(Number.POSITIVE _FIINFINITY);//正无穷
alert(Number. NEGATIVE_FIINFINITY);//负无穷
var box=100e10;
alert(isFinite(box));
var box=0/0;
alert(box);//NaN

alert(Number.NaN);//NaN
alert(NaN+1);//NaN
alert(NaN==NaN);//false

alert(isNaN(NaN));    //true
alert(isNaN(25));    //false
alert(isNaN(“25”));    //false,”25”是一个字符串数值，可以转成数值
alert(isNaN(“chen”));    //true，不能转成数值
alert(isNaN(true));    //false ture可以转成1


var box={};
alert(isNaN(box)); //ture
var box={
	toString:function(){
		return”123”;
}
}; 
alert(isNaN(box)); // false

alert(Number(ture));  //1
alert(Number(25));  //25
alert(Number(null));  //0
alert(Number(undefined));  //NaN
 

6String类型
var box=”lee”;
var box=’lee’
toString()
var box=10;
alert(box.toString());//10
alert(box.toString(2));1010，二进制输出
var box=null;
alert(String(box));    //”null”

7Object类型
var box ={};
var box=new Object();   //通过new创建一个对象

var box=new Object(2);
alert(box);

var box=new Number(60);
alert(typeof box);   

var box=new String(lee); 
alert(box);
alert(typeof box);
