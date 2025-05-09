import { VFC, SVGProps } from 'react';

export interface SidebarITemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
