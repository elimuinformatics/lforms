import { Component, OnInit, Input } from '@angular/core';
import { LhcDataService} from '../../lib/lhc-data.service';

@Component({
  selector: 'lhc-popover',
  templateUrl: './lhc-popover.component.html',
  styleUrls: ['./lhc-popover.component.css']
})
export class LhcPopoverComponent implements OnInit {

  @Input() item: any;
  @Input() popoverType: string;
  @Input() formLevel: boolean = false;
  @Input() buttonLabel: string = null;
  constructor(private lhcDataService: LhcDataService) { }

  ngOnInit(): void {    
  }

  /**
   * Send the popover content to screen reader log when the popover button is clicked
   */
  onShowingPopver(): void {
    let title = this.popoverType === "copyright-string" ? "Copyright notice:" : "Instruction:"
    let content, contentId;

    if (this.popoverType === "copyright-string") {
      title = "Copyright notice:"
      contentId = "copyright-content-" + (this.formLevel ? this.item.code : this.item._elementId);
    }
    else {
      title = "Instruction:"
      contentId = "help-content-" + (this.formLevel ? this.item.code : this.item._elementId);
    }

    setTimeout(() => {
      // get the displayed text instead of possible HTML content
      let content = document.getElementById(contentId).textContent;
      this.lhcDataService.sendMsgToScreenReader(`${title} ${content}`)
    }, 10)
  }
}
