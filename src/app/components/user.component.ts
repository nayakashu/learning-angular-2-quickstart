import { Component } from '@angular/core';

import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})

export class UserComponent {
    name: string;
    email: string;
    address: Address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Ashutosh Nayak';
        this.email = 'ashugodhoom@gmail.com';
        this.address = {
            street: '29th "C" Cross',
            city: 'Bangalore',
            state: 'Karnataka'
        };
        this.hobbies = ['Movies', 'Reading', 'Music'];
        this.showHobbies = true;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    deleteHobby(index: number) {
        this.hobbies.splice(index, 1);
    }
}

interface Address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: string;
    title: string;
    body: string;
}
