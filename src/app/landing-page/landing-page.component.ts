import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageArray = [
    {
      imagePicture:"../../assets/image/Image (1).png",
      imageName:" An animated nft images",
      description: " An animated nft images with animation NFT represents the animation"
    },
    {
      imagePicture:"../../assets/image/Image-2.png",
      imageName:"'DIWAI' NFT group",
      description: " KIWAI NFT group leading the world"
    },
    {
      imagePicture:"../../assets/image/Image-3.png",
      imageName:"'MOAR' by John Cornella" ,
      description: "Identifies the asset to which this NFT represents"
    },
    {
      imagePicture:"../../assets/image/Image-4.png",
      imageName:"Dooldles",
      description: "Describes the asset to which this NFT represents"
    },
    {
      imagePicture:"../../assets/image/Image-5.png",
      imageName:"'KIWAMI' Genesis ",
      description: "Arbitrary properties. Values may be strings, numbers, object or arrays"
    },
    {
      imagePicture:"../../assets/image/Image-6.png",
      imageName:"Arcade Land",
      description: "Friendly OpenSea Creature"
    },
    {
      imagePicture:"../../assets/image/Image-7.png",
      imageName:" Goons of 'BALATROONS'",
      description: " A Goons of 'BALATRO Collections"
    },
    {
      imagePicture:"../../assets/image/Image-8.png",
      imageName:"Meta Toy DragonZ",
      description: "Meta customize the image with a custom."
    }
    ]
}
