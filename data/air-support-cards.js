export const AIR_SUPPORT_CARDS = {
  recon:{id:'recon',name:'空中侦察',category:'support',missionType:'recon',aircraft:'P40N',uses:99,cooldown:0,radius:2},
  p40_strafe:{id:'p40_strafe',name:'P-40N 战斗机扫射',category:'attack',missionType:'strafe',aircraft:'P40N',uses:99,cooldown:0,radius:0},
  ju87_dive:{id:'ju87_dive',name:'Ju 87 俯冲轰炸',category:'attack',missionType:'dive_bomb',aircraft:'JU87D',uses:99,cooldown:0,radius:0},
  b25_bomb:{id:'b25_bomb',name:'B-25 战术轰炸',category:'attack',missionType:'tactical_bomb',aircraft:'B25J',uses:99,cooldown:0,radius:1},
  b29_heavy:{id:'b29_heavy',name:'B-29 重型轰炸',category:'attack',missionType:'heavy_bomb',aircraft:'B29A',uses:99,cooldown:0,radius:2},
  cap:{id:'cap',name:'战斗空中巡逻',category:'support',missionType:'cap',aircraft:'P51D',uses:99,cooldown:0,duration:2},
  supply:{id:'supply',name:'C-47 空投补给',category:'support',missionType:'supply',aircraft:'C47',uses:99,cooldown:0,radius:0},
  paradrop:{id:'paradrop',name:'C-47 伞兵空降',category:'airborne',missionType:'paradrop',aircraft:'C47',uses:99,cooldown:0,radius:0},
  i15_strafe:{id:'i15_strafe',name:'I-15bis 扫射',category:'attack',missionType:'strafe',aircraft:'I15BIS',uses:99,cooldown:0,radius:0},
  i16_cap:{id:'i16_cap',name:'I-16 战斗空中巡逻',category:'support',missionType:'cap',aircraft:'I16T24',uses:99,cooldown:0,duration:2},
  yak3_cap:{id:'yak3_cap',name:'Yak-3 制空巡逻',category:'support',missionType:'cap',aircraft:'YAK3',uses:99,cooldown:0,duration:2},
  yak9t_armor:{id:'yak9t_armor',name:'Yak-9T 反装甲攻击',category:'attack',missionType:'anti_armor',aircraft:'YAK9T',uses:99,cooldown:0,radius:0},
  il2_attack:{id:'il2_attack',name:'Il-2 强击',category:'attack',missionType:'ground_attack',aircraft:'IL2',uses:99,cooldown:0,radius:0},
  il10_attack:{id:'il10_attack',name:'Il-10 强击',category:'attack',missionType:'ground_attack',aircraft:'IL10',uses:99,cooldown:0,radius:0},
  sb2_bomb:{id:'sb2_bomb',name:'SB-2 战术轰炸',category:'attack',missionType:'tactical_bomb',aircraft:'SB2',uses:99,cooldown:0,radius:1},
  db3_bomb:{id:'db3_bomb',name:'DB-3 远程轰炸',category:'attack',missionType:'heavy_bomb',aircraft:'DB3',uses:99,cooldown:0,radius:1},
  pe2_dive:{id:'pe2_dive',name:'Pe-2 精确轰炸',category:'attack',missionType:'dive_bomb',aircraft:'PE2',uses:99,cooldown:0,radius:0},
  tu2_bomb:{id:'tu2_bomb',name:'Tu-2 战术轰炸',category:'attack',missionType:'tactical_bomb',aircraft:'TU2',uses:99,cooldown:0,radius:1},
  li2_supply:{id:'li2_supply',name:'Li-2 空投补给',category:'support',missionType:'supply',aircraft:'LI2',uses:99,cooldown:0,radius:0},
  li2_paradrop:{id:'li2_paradrop',name:'Li-2 伞兵空降',category:'airborne',missionType:'paradrop',aircraft:'LI2',uses:99,cooldown:0,radius:0},
  mig15_cap:{id:'mig15_cap',name:'MiG-15bis 高空截击',category:'support',missionType:'cap',aircraft:'MIG15BIS',uses:99,cooldown:0,duration:2}
};
export const AIR_SUPPORT_DECKS = {
  system_test_air:{id:'system_test_air',name:'综合测试航空卡组',cards:['recon','p40_strafe','ju87_dive','b25_bomb','b29_heavy','cap','supply','paradrop','i15_strafe','i16_cap','yak3_cap','yak9t_armor','il2_attack','il10_attack','sb2_bomb','db3_bomb','pe2_dive','tu2_bomb','li2_supply','li2_paradrop','mig15_cap']},
  soviet_volunteer_china:{id:'soviet_volunteer_china',name:'苏联援华航空队',cards:['i15_strafe','i16_cap','sb2_bomb','db3_bomb']},
  soviet_tactical_ww2:{id:'soviet_tactical_ww2',name:'苏联战术航空兵',cards:['yak3_cap','yak9t_armor','il2_attack','il10_attack','pe2_dive','tu2_bomb','li2_supply','li2_paradrop']},
  soviet_korea:{id:'soviet_korea',name:'苏系喷气航空兵',cards:['mig15_cap','il10_attack','li2_supply']}
};
