'use client';

import React from 'react';
import RobustDateInput from './RobustDateInput';

interface DateInputTripleMethodProps {
  id: string;
  value: string; // YYYY-MM-DD
  onChange: (val: string) => void;
  placeholder?: string;
  error?: boolean;
}

export default function DateInputTripleMethod(props: DateInputTripleMethodProps) {
  return <RobustDateInput {...props} />;
}

