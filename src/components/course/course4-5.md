### 控制积木块	
#### 1.	等待（）秒
![](../../assets/images/course-zh/course4/course4-5/001.png)  
●	用于隔开的积木，等待“输入的数值”后，执行下面的脚本

#### 2.重复执行（）次
![](../../assets/images/course-zh/course4/course4-5/002.png)  
●   重复执行“输入的数值”次积木块中包含的脚本积木，默认值为10次

#### 3.	重复执行
![](../../assets/images/course-zh/course4/course4-5/003.png)  
●  	重复无限次执行积木块中包含的脚本积木

#### 4.使用[我的变量]从（i）到（j）步长为（n）
![](../../assets/images/course-zh/course4/course4-5/004.png)  
●   定义我的变量初始值为i，结束值为j，步长为n。i每次增加n（i=i+n），当i小于j时执行包含的脚本积木，否 则跳出此循环积木  
● 	示例： for(i=1;i<10,i++)  
        {  
        循环体语句;  
        }  
这样的循环体会执行9次（分别是i=0到i=10时的情况）  
它的执行流程是这样的： 首先给变量i赋初值1，然后判断，若满足条件i<10（是），就执行循环体的语句，完成后再i++，即 i = i + 1; i 变成2，然后再次判断是否满足条件i<10（仍是），就再执行循环体的语句，完成后继续i++，当 i 成为10，  判断是否满足条件i<10，发现不再满足，于是就退出循环。


#### 5.	如果<条件>那么（）
![](../../assets/images/course-zh/course4/course4-5/005.png)  
●  如果嵌入<条件>成立，则执行“如果”积木块中包含的脚本积木，否则跳过此积木。

#### 6.如果<条件>那么()否则（）
![](../../assets/images/course-zh/course4/course4-5/006.png)  
● 	如果嵌入<条件>成立，则执行“如果”积木块中包含的脚本积木，否则执行“否则”积木块包含的脚本积木。

#### 7.等待（）
![](../../assets/images/course-zh/course4/course4-5/007.png)  
●  用于隔开的积木，等待嵌入<条件>成立后，运行下面的积木脚本，否则一直等待

#### 8.	重复执行直到（）
![](../../assets/images/course-zh/course4/course4-5/008.png)  
●  重复执行包含的脚本积木，直到嵌入<条件>成立，则运行此积木下的脚本积木

#### 9.停止[全部脚本]
![](../../assets/images/course-zh/course4/course4-5/009.png)  
●  停止执行[全部脚本/这个脚本/该角色的其他脚本]的程序

#### 10.当作为克隆体启动
![](../../assets/images/course-zh/course4/course4-5/010.png)  
●  当克隆体生成时，执行此积木块下的脚本积木

#### 11.克隆[自己]
![](../../assets/images/course-zh/course4/course4-5/011.png)  
●  克隆自己或其他角色的克隆体

#### 12.删除此克隆体
![](../../assets/images/course-zh/course4/course4-5/012.png)  
●  删除该克隆体