import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AspectRatioModule } from '../../core/common/aspect-ratio/aspect-ratio.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { AdvancedPieChartWidgetModule } from '../../core/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module';
import { AudienceOverviewWidgetModule } from '../../core/widgets/audience-overview-widget/audience-overview-widget.module';
import { BarChartWidgetModule } from '../../core/widgets/bar-chart-widget/bar-chart-widget.module';
import { DonutChartWidgetModule } from '../../core/widgets/donut-chart-widget/donut-chart-widget.module';
import { LineChartWidgetModule } from '../../core/widgets/line-chart-widget/line-chart-widget.module';
import { MapsWidgetModule } from '../../core/widgets/maps-widget/maps-widget.module';
import { MarketWidgetModule } from '../../core/widgets/market-widget/market-widget.module';
import { QuickInfoWidgetModule } from '../../core/widgets/quick-info-widget/quick-info-widget.module';
import { RealtimeUsersWidgetModule } from '../../core/widgets/realtime-users-widget/realtime-users-widget.module';
import { RecentSalesWidgetModule } from '../../core/widgets/recent-sales-widget/recent-sales-widget.module';
import { SalesSummaryWidgetModule } from '../../core/widgets/sales-summary-widget/sales-summary-widget.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { UserComponent } from '../components/user/user.component';
import { DetailUserComponent} from '../components/detail-user/detail-user.component';
import {EditUserComponent} from '../components/edit-user/edit-user.component';
import {ImportUserComponent} from '../components/import-user/import-user.component';
import {DeleteUserComponent} from '../components/delete-user/delete-user.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

    // Core
    AspectRatioModule,
    PageModule,

    // Widgets
    BarChartWidgetModule,
    LineChartWidgetModule,
    DonutChartWidgetModule,
    SalesSummaryWidgetModule,
    AudienceOverviewWidgetModule,
    RealtimeUsersWidgetModule,
    QuickInfoWidgetModule,
    RecentSalesWidgetModule,
    AdvancedPieChartWidgetModule,
    MapsWidgetModule,
    MarketWidgetModule
  ],
  declarations: [DashboardComponent, UserComponent, DetailUserComponent, EditUserComponent, ImportUserComponent, DeleteUserComponent],
  entryComponents: [UserComponent, DetailUserComponent, EditUserComponent, ImportUserComponent, DeleteUserComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
