import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('tabs-vertical')
export default class TabsVertical extends Component {
  static css = [tailwind]

  state = {
    active: 'tab1',
  }

  handleVerticalClick = (active: string) => {
    this.state.active = active
    this.update()
  }

  render() {
    return (
      <div className="flex items-start">
        <o-tabs vertical>
          <o-tabs-item onClick={() => this.handleVerticalClick('tab1')} active={this.state.active === 'tab1'}>
            Home
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleVerticalClick('tab2')} active={this.state.active === 'tab2'}>
            Profile
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleVerticalClick('tab3')} active={this.state.active === 'tab3'}>
            Messages
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleVerticalClick('tab4')} active={this.state.active === 'tab4'} disabled>
            Contact
          </o-tabs-item>
        </o-tabs>

        <div>
          {this.state.active === 'tab1' && <div>Tab 1 content</div>}
          {this.state.active === 'tab2' && <div>Tab 2 content</div>}
          {this.state.active === 'tab3' && <div>Tab 3 content</div>}
          {this.state.active === 'tab4' && <div>Tab 4 content</div>}
        </div>
      </div>
    )
  }
}
