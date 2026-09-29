export class AirDefenseSystem {
  constructor(world,getUnits){this.world=world;this.getUnits=getUnits;}
  isAA(u){const t=String(u?.type??'').toLowerCase();return ['anti_air','antiair','aa','air_defense'].includes(t)||/防空|高射/.test(String(u?.name??''));}
  dist(a,b){const aq=+a.q,ar=+a.r,bq=+b.q,br=+b.r;return (Math.abs(aq-bq)+Math.abs(aq+ar-bq-br)+Math.abs(ar-br))/2;}
  positionAt(q,r){return (this.world?.fortifications??[]).find(f=>+f.q===+q&&+f.r===+r&&String(f.type??'').startsWith('aa_position'));}
  threat(target,defenderSide,altitude='low'){
    let score=0, sources=[];
    for(const u of (this.getUnits?.()??[])){
      if(u.offMap===true||!this.isAA(u)||String(u.faction??u.side)!==String(defenderSide))continue;
      const range=Number(u.airDefense?.range??u.range??3); if(this.dist(u,target)>range)continue;
      let atk=Number(u.airDefense?.attack??Math.max(25,Number(u.attack??5)*7));
      if(altitude==='high'&&!u.airDefense?.highAltitude)atk*=0.35;
      const pos=this.positionAt(u.q,u.r);if(pos){const level=Math.min(3,+pos.level||1),integrity=Math.max(0,Math.min(1,Number(pos.integrity??100)/100));atk*=1+[0,.1,.22,.38][level];atk*=.45+.55*integrity;}
      score+=atk;sources.push(u.name);
    }
    return {score,sources};
  }
}
