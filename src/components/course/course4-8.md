### AI积木块	
#### 1.	人像分割
1.1 对角色造型进行人像分割  
![](../../assets/images/course-zh/course4/course4-8/001.png)    
●   功能描述：本积木能够识别舞台上某一角色造型的人体轮廓，将背景和人像分离开来，只保留基本人像。注意，本积木块通常只对那些有背景的人像图片生效。  
●   工作原理：本积木使用的是开源机器学习模型bodyPix，它允许在uCode中对图像或者视频进行人像分割。在现实应用场景中，人像分割技术可用于抠图与美化，人体特效，和影视后期处理。  
●   编程范例：  
![](../../assets/images/course-zh/course4/course4-8/001-1.png)  

●   运行效果预览：  
![](../../assets/images/course-zh/course4/course4-8/001-2.png)  

1.2对视频进行实时人像分割  
![](../../assets/images/course-zh/course4/course4-8/002.png)  
●   功能描述：本积木能够对视频流进行人像分割，将背景和人像分离开来，只保留基本人像。  
●   工作原理：本积木使用的是开源机器学习模型bodyPix，它允许在uCode中对图像或者视频进行人像分割。在现实应用场景中，人像分割技术可用于抠图与美化，人体特效，和影视后期处理。  
●   编程范例：  
![](../../assets/images/course-zh/course4/course4-8/002-1.png)  


#### 2.姿态检测
2.1对角色造型进行姿态侦测  
![](../../assets/images/course-zh/course4/course4-8/003.png)    
●   功能描述：本积木能够对舞台上的角色造型进行实时姿态预测。  
●   工作原理：本积木使用的是开源机器学习模型PoseNet，能够通过对图像或视频中人体的关键位置进行姿势的预测。  

2.2对视频进行姿态侦测  
![](../../assets/images/course-zh/course4/course4-8/004.png)  

●   功能描述：本积木能够对视频流中出现的人体进行实时姿态预测。  
●   工作原理：本积木使用的是开源机器学习模型PoseNet，能够通过对图像或视频中人体的关键位置进行姿势的预测。  

●   编程范例：  
![](../../assets/images/course-zh/course4/course4-8/004-1.png)  

#### 3.	图像分类
![](../../assets/images/course-zh/course4/course4-8/005.png)    
●   功能描述：本组积木能够预测角色造型图像的分类，并返回对应的置信度。  
●   工作原理：本积木使用的是开源机器学习模型ImageNet，是在大约1500万张图像（ImageNet）的数据库上训练的。模型预测的内容取决于训练数据中的包含，排除的内容以及如何对图像进行标记。  

●   编程范例：  
![](../../assets/images/course-zh/course4/course4-8/005-1.png)  
