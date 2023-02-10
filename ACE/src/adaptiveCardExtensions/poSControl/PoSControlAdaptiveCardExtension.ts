import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { PoSControlPropertyPane } from './PoSControlPropertyPane';

export interface IPoSControlAdaptiveCardExtensionProps {
  alertURL: string;
}

export interface IPoSControlAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'PoSControl_CARD_VIEW';

export default class PoSControlAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IPoSControlAdaptiveCardExtensionProps,
  IPoSControlAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: PoSControlPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'PoSControl-property-pane'*/
      './PoSControlPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.PoSControlPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
