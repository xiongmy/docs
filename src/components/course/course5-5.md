###  开始积木块

#### 1.初始化
![](../../assets/images/course-zh/course5/course5-5/001.png)  
● 	初始化积木块包含的脚本的内容不会被重复执行 注意：初始化模块不允许被复制

#### 2.停止程序
![](../../assets/images/course-zh/course5/course5-5/002.png)  
● 	停止当前脚本


###  运动积木块

#### 1.舵机轮模式ID-[01]，[顺时针]，速度（0-255）（1）
![](../../assets/images/course-zh/course5/course5-5/003.png)  
● 	舵机轮模式下,指定舵机的ID按“你输入数值”的速度顺时针[逆时针]旋转

#### 2.舵机角模式ID-[01]，角度（-118°~118°）（0），运行时长（1000）毫秒
![](../../assets/images/course-zh/course5/course5-5/004.png)  
● 	舵机角模式下，指定舵机的ID转到到下一状态（“你输入数值”的角度），运行“你输入数值”的时长

#### 3.舵机角模式ID-[01],角度（-118°~118°）（0），运行时长（1000）毫秒 直到结束
![](../../assets/images/course-zh/course5/course5-5/005.png)  
● 	舵机角模式下，指定舵机的ID转到下一状态（“你输入数值”的角度），运行“你输入数值”的时长，直至 运行完成

#### 4.停止舵机ID-[01]
![](../../assets/images/course-zh/course5/course5-5/006.png)  
● 	停止指定舵机运行

#### 5.巡线任务 速度（0-255）（100）
![](../../assets/images/course-zh/course5/course5-5/007.png)  
● 	巡线模式下，通过再每个任务分支中放置执行模块，实现每个交叉口执行动作的功能

#### 6.电机ID-[01]，[顺时针]转动，恒定速度（100）转/分钟
![](../../assets/images/course-zh/course5/course5-5/008.png)  
● 	指定电机的ID按“你输入数值”的恒定速度顺时针[逆时针]转动

#### 7.电机ID-[01]，[顺时针]转动，PWM（100）
![](../../assets/images/course-zh/course5/course5-5/009.png)  
● 	指定电机的ID按照“你输入数值”的脉冲调整（PWM）顺时针[逆时针]转动

#### 8.停止电机ID-[01]
![](../../assets/images/course-zh/course5/course5-5/010.png)  
● 	停止指定电机运行

#### 9.NOC机器人动作[车变人]运行次数（1）
![](../../assets/images/course-zh/course5/course5-5/012.png)  
● 	NOC机器人动作列表，仅针对NOC机器人模型可用，其中“车型停止”忽略运行次数


###  声光积木块

#### 1.播放音调[C3]，持续时间（100）毫秒
![](../../assets/images/course-zh/course5/course5-5/011.png)  
● 	Explore的蜂鸣器播放指定的音调，并运行指定时间后停止

#### 2.播放频率（400）Hz，持续时间（100）毫秒
![](../../assets/images/course-zh/course5/course5-5/013.png)  
● 	Explore的蜂鸣器播放指定频率的声音，并运行指定时间后停止

#### 3.结束声音
![](../../assets/images/course-zh/course5/course5-5/014.png)  
● 	结束当前脚本的所有的声音

#### 4.板载RGB灯颜色为（）
![](../../assets/images/course-zh/course5/course5-5/015.png)  
● 	Explore的板载RGB灯亮起指定的颜色

#### 5.板载RGB灯颜色为R（0）G（0）B（0）
![](../../assets/images/course-zh/course5/course5-5/016.png)  
● 	Explore的板载灯亮起指定的颜色 参数范围：
● 	R：0~255 G：0-255 B：0-255

#### 6.关闭板载RGB灯
![](../../assets/images/course-zh/course5/course5-5/017.png)  
● 	关闭当前脚本的Explore的板载RGB灯

#### 7.亮起眼灯ID-[01]，颜色（）
![](../../assets/images/course-zh/course5/course5-5/018.png)  
● 	指定眼灯的ID亮起指定的颜色，脚本执行不会停顿

#### 8.亮起眼灯ID-[01]，颜色R（0）G（0）B（0）
![](../../assets/images/course-zh/course5/course5-5/019.png)  
● 	指定眼灯ID亮起指定的颜色，脚本执行不会停顿

#### 9.眼灯ID-[01]，自定义灯瓣[颜色]持续时间（100）毫秒直到结束
![](../../assets/images/course-zh/course5/course5-5/020.png)  
● 	指定眼灯ID亮起指定灯瓣的颜色，并运行指定时间

#### 10.眼灯表情ID-[01]，显示表情[眨眼]，颜色（），（1）次
![](../../assets/images/course-zh/course5/course5-5/021.png)  
● 	指定眼灯ID显示你指定颜色的表情，并运行指定的次数，同时下面的脚本

table

#### 11.眼灯ID-[01]，情景灯[七彩跑马灯]（1）次
![](../../assets/images/course-zh/course5/course5-5/022.png)  
● 	指定眼灯ID展示未指定的情景灯[七彩跑马灯/Disco/三原色/颜色堆叠]，并运行指定的次数，同时执行下面的
脚本

#### 12.眼灯ID-[01]，情景灯[七彩跑马灯]（1）次 直到结束
![](../../assets/images/course-zh/course5/course5-5/023.png)  

● 	指定眼灯ID展示为指定的情景灯[七彩跑马灯/Disco/三原色/颜色堆叠]，直到指定的次数运行完毕则开始执行 下面的脚本

#### 13.关闭眼灯[01]
![](../../assets/images/course-zh/course5/course5-5/024.png)  
● 	关闭指定眼灯的效果


###  感知积木块

#### 1.巡线传感器 num-[01]检测到[深]
![](../../assets/images/course-zh/course5/course5-5/025.png)  
● 	当指定巡线传感器检测到为[深/浅]，报告此积木块条件成立

#### 2.读取舵机ID-[01]在状态为[不可掰动]时的角度
![](../../assets/images/course-zh/course5/course5-5/026.png)  
● 	获取指定舵机在[不可掰动/可掰动]时的角度

#### 3.读取电机 ID-[01]的转速（r/min）
![](../../assets/images/course-zh/course5/course5-5/027.png)  
●   获取指定电机的转速

#### 4.uKit超声波传感器ID-[01]超声波测距（cm）
![](../../assets/images/course-zh/course5/course5-5/028.png)  
● 	获取指定uKit超声波传感器使用超声波测试的距离

#### 5.uKit红外传感器ID-[01]获取距离
![](../../assets/images/course-zh/course5/course5-5/029.png)  
● 	获取指定uKit红外传感器测试的距离

#### 6.获取电池电压
![](../../assets/images/course-zh/course5/course5-5/030.png)  
● 	获取当前Explore所接电池的电压值

#### 7.陀螺仪[加速度（m/s²）]选择[X轴]
![](../../assets/images/course-zh/course5/course5-5/031.png)  
● 	获取陀螺仪[加速度（m/s²）/陀螺仪（°/s）]的[X轴/Y轴/Z轴]的数据

#### 8.按键板载状态为[单击]
![](../../assets/images/course-zh/course5/course5-5/032.png)  
● 	如果按键板载的状态为[单击/双击/长按]，则执行该积木块包含的脚本积木，否则跳过此积木

#### 9.按压传感器ID-[01]状态为[单击]
![](../../assets/images/course-zh/course5/course5-5/033.png)  
● 	如果指定的安装传感器的状态为[单击/双击/长按]，则执行该积木块包含的脚本积木，否则跳过此积木

#### 10.按压传感器ID-[01]状态为[单击]
![](../../assets/images/course-zh/course5/course5-5/034.png)  
● 	当指定的按压传感器的状态为[单击/双击/长按]，此积木块条件成立

#### 11.亮度传感器ID-[01]获取亮度值(lux)
![](../../assets/images/course-zh/course5/course5-5/035.png)  
● 	获取指定亮度传感器的亮度值

#### 12.声音传感器ID-[01]获取声音强度值
![](../../assets/images/course-zh/course5/course5-5/036.png)  
● 	获取指定声音传感器的声音强度值

#### 13.湿度传感器ID-[01]获取湿度%
![](../../assets/images/course-zh/course5/course5-5/037.png)  
● 	获取指定湿度传感器的湿度百分比

#### 14.颜色传感器ID-[01]检测[R]值
![](../../assets/images/course-zh/course5/course5-5/038.png)  
● 	获取指定颜色传感器的[R/G/B]值

#### 15.颜色传感器ID-[01]检测到颜色为[红色]
![](../../assets/images/course-zh/course5/course5-5/039.png)  
● 	当指定的颜色传感器检测到颜色为[红色]，此积木块条件成功
table



###  逻辑积木块

#### 1.等待(1000)[毫秒]
![](../../assets/images/course-zh/course5/course5-5/040.png)  
● 	等待指定的时间后，执行其后程序

#### 2.如果（）那么
![](../../assets/images/course-zh/course5/course5-5/041.png)  
● 	如果嵌入成立，则执行“如果”积木块中包含的脚本积木，否则跳过此积木

#### 3.如果（）那么[]否则[]
![](../../assets/images/course-zh/course5/course5-5/042.png)  
●   如果嵌入<条件>成立，则执行“如果”积木块中包含的脚本积木，否则执行“否则”积木块包含的脚本积木

#### 4.使用[i]从（1）到（10）步长为（1）执行
![](../../assets/images/course-zh/course5/course5-5/043.png)  

● 	定义我的变量初始值为i，结束值为j，步长为n。i每次增加n（i=i+n），当i小于j时执行包含的脚本积木，否 则跳出此循环积木  
● 	示例： for(i=1;i<10,i++)  
    {  
        循环体语句;  
    }  
    这样的循环体会执行9次（分别是i=0到i=10时的情况）  
    它的执行流程是这样的： 首先给变量i赋初值1，然后判断，若满足条件i<10（是），就执行循环体的语句，完成后再i++，即 i = i + 1; i 变成2，然后再次判断是否满足条件i<10（仍是），就再执行循环体的语句，完成后继续i++，当 i 成为10，  判断是否满足条件i<10，发现不再满足，于是就退出循环。

#### 5.重复[当满足]（）执行
![](../../assets/images/course-zh/course5/course5-5/044.png)  

● 	当[满足/直到]内的条件成立时，重复执行包含的脚本内容

#### 6.[跳出]循环
![](../../assets/images/course-zh/course5/course5-5/045.png)  

● 	[跳出\跳到下一个]当前脚本的程序，中断当前的循环

#### 7.系统运行时间[毫秒]
![](../../assets/images/course-zh/course5/course5-5/046.png)  

● 	获取当前程序运行的时间

#### 8.（50）[=]（50）
![](../../assets/images/course-zh/course5/course5-5/047.png)  

● 	如果指定的参数[等于/不等于/小于/小于等于/大于/大于等于]时，此积木块条件成立

#### 9.（）[且]（）
![](../../assets/images/course-zh/course5/course5-5/048.png)  

● 	如果指定的条件[且/或]时，此积木块条件成立

#### 10.[真]
![](../../assets/images/course-zh/course5/course5-5/049.png)  

● 	如果条件为[真/假/空]时，此积木块条件成立

#### 11.非（）
![](../../assets/images/course-zh/course5/course5-5/050.png)  

● 	当指定的条件为不成立时，此积木块条件成立

#### 12.判断（）如果为真（）如果为假（）
![](../../assets/images/course-zh/course5/course5-5/051.png)  

● 	判断的条件为真，执行第二个参数，否则执行第三个参数

#### 13.判断（）如果为真（）如果为假（）
![](../../assets/images/course-zh/course5/course5-5/052.png)  

● 	判断条件为假时，执行第二个条件，否则执行第三个条件


###  数学积木块

#### 1.数值
![](../../assets/images/course-zh/course5/course5-5/053.png)  

● 	可输入 整数 或者 小数 ，返回数值

#### 2.（1）[+]（1）
![](../../assets/images/course-zh/course5/course5-5/054.png)  

● 	获取参数A和参数B的加减乘除、取余数和次方的得数运算  
加法：（）+（）=A+B   
减法：（）-（）=A-B  
乘法：（）x（）=AxB   
除法：（）÷（）=A÷B   
余数：（）%（）=A÷B 余数为C   
次方：（）^（）=A^B  

#### 3.（0）&（0）
![](../../assets/images/course-zh/course5/course5-5/055.png)  

●   获取变量A和变量B的[与/或/次方/远大于/远小于]的结果

#### 4.[++]（）
![](../../assets/images/course-zh/course5/course5-5/056.png)  

● 	获取变量[自加/自减/取反]运算的结果。  
注意：返回运算结果的值，执行下方的积木块

#### 5.（）[++]
![](../../assets/images/course-zh/course5/course5-5/056.png)  

● 	获取变量[自加/自减/取反]运算的结果  
● 	返回原来的值，执行完成下方的积木块后，再执行运算返回值  

#### 6.[sin]（1）
![](../../assets/images/course-zh/course5/course5-5/058.png)  

● 	获取指定的运算法则得到的数值
● 	包含：sin（）、cos（）、tan（）、asin（）、acos（）、atan（）、In（）、log10（）、e^（）、 10^（）

#### 7.[取整（四舍五入）]（）
![](../../assets/images/course-zh/course5/course5-5/059.png)  

● 	使用选择的运算形式对数值进行运算为其他值 类型：
● 	例：取整（四舍五入）：3.1415926=3 
    取整（取上限）：4.24=5
    取整（取下限）：4.99=4 
    取绝对值：-1.24=1.24 
    平方：3=3²
    平方根：9=3

#### 8.[取最大值]（1,2）
![](../../assets/images/course-zh/course5/course5-5/060.png)  

● 	获取参数A和参数B的最大值（最小值） 
● 	类型：取最大值：（10，9）=100 
    取最小值：（4，5）=4 

#### 9.初始化随机数
![](../../assets/images/course-zh/course5/course5-5/061.png)  

● 	随机数生成的数字不是真正的随机，它是确定性。初始化随机数，可以使每次运行脚本产生不同的随机数序列

#### 10.随机数从（1）到（100）
![](../../assets/images/course-zh/course5/course5-5/062.png)  

● 	获取参数A和参数B之间的随机数

#### 11.约束（1）介于（最小值）（1）和（最大值）（100）
![](../../assets/images/course-zh/course5/course5-5/063.png)  

● 	获取限制数字介于两个指定的数字之间的数值

#### 12.映射（1）从[1,100]到[1,1000]
![](../../assets/images/course-zh/course5/course5-5/064.png)  

● 	将一个指定的数值从第一个区间映射到第二个区间，并返回映射之后的值
