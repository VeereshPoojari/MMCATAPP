export interface TableColumn<T> {
    label: string;
    property:  string|[];
    type: 'text' | 'image' | 'badge' | 'progress' | 'checkbox' | 'button' | 'icon';
    visible?: boolean;
    cssClasses?: string[];
    sort: boolean;
    mandatory: boolean;
  }
  