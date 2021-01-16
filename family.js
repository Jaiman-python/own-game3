class Family{

    constructor(){
        this.workImg = loadImage("images/Work card.png");
        this.Sprite = createSprite(600,200);
        this.whack_a_moleIMG = loadImage("images/Mole.png")
    }
    
    
    display(){
        this.Sprite.addImage(this.workImg);
        if(mousePressedOver(this.Sprite)){
            familyCard.visible = false;
            lesiureCard.visible = false;
            this.Sprite.visible = false;
            task1 = true;
            //finish1 = true;
        }
        
        
    
        if(task1 == true){
            
            textSize(30);
            fill("black");
            text("Whack-a-Mole!", 500, 50)
            if(mole_flag !== true){
                whack_a_mole = createSprite(random(100,1100),random(50,650), 20,20);
                whack_a_mole.addImage(this.whack_a_moleIMG);
                
                mole_flag = true;
            }
            if(frameCount % 17 == 0){
                whack_a_mole.x = random(100,1100);
                whack_a_mole.y = random(50,651);
            }
            console.log(task1);
            if(player.Sprite.isTouching(whack_a_mole)){
                task1_count+=1;
                if(task1_count%20==0){
                    finish1 = true;
                }
                console.log(task1_count);
                whack_a_mole.destroy();
                mole_flag = false;
            }
            if(task1_count != 0 && task1_count%20 == 0 && finish1 == true){
                task1 = false;
                whack_a_mole.destroy();
                familyCard.visible = true;
                lesiureCard.visible = true;
                this.Sprite.visible = true;
                finish1 = false;
            }
        
        }
        
    }
    }