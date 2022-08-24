import {AfterViewInit, Component, OnDestroy,} from '@angular/core';

@Component({
  selector: 'app-view-notfound',
  template: `

    <div class="flex h-full items-center justify-center">
      <h1>Select Pokedex</h1>
<!--    </div>-->
<!--    <div #canvas-->
<!--         class="relative top-2 left-2 bg-slate-800 w-[50%] h-[50%] overflow-clip ring-red-800 ring-8 rounded-sm">-->
<!--      <div-->
<!--        #box-->
<!--        class="absolute cursor-pointer left-16 top-16 w-12 h-12 bg-red-400 ring-red-700 rounded-sm"-->
<!--      ></div>-->
    </div>
  `,
})
export class ViewNotfoundComponent implements AfterViewInit, OnDestroy {
  constructor() {
  }

  // @ViewChild('box') box: ElementRef<HTMLDivElement>;
  // @ViewChild('canvas') canvas: ElementRef<HTMLDivElement>;

  // subscribtion: Subscription;

  ngOnDestroy(): void {
    // this.subscribtion?.unsubscribe;
  }

  ngAfterViewInit(): void {
    // const box = this.box.nativeElement;
    //
    // const boxmousedown$ = fromEvent<MouseEvent>(box, 'mousedown');
    // const boxmouseup$ = fromEvent(box, 'mouseup');
    // const boxmouseMove$ = fromEvent<MouseEvent>(document, 'mousemove').pipe();
    //
    // this.subscribtion = boxmousedown$
    //   .pipe(
    //     switchMap((start) =>
    //       boxmouseMove$.pipe(
    //         map((move) => {
    //           return {
    //             x: move.clientX - start.offsetX - 8,
    //             y: move.clientY - start.offsetY - 8,
    //           };
    //         }),
    //         takeWhile(
    //           (coords) =>
    //             coords.x < window.innerWidth / 2 - 40 &&
    //             coords.x > 0 &&
    //             coords.y < window.innerHeight / 2 - 40 &&
    //             coords.y > 0
    //         ),
    //         takeUntil(boxmouseup$),
    //         finalize(() => {
    //           box.classList.remove('ring', 'scale-125');
    //         })
    //       )
    //     )
    //   )
    //   .subscribe((event) => {
    //     box.classList.add('ring', 'scale-125');
    //     box.style.left = event.x + 'px';
    //     box.style.top = event.y + 'px';
    //   });
  }
}
